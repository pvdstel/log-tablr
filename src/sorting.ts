interface SortingState {
    key: string;
    ascending: boolean;
}

interface Sortable {
    [key: string]: string | number;
}

type ComparerType<T> = (a: T, b: T) => number;
type ComparerGenerator<T> = (key: string, data: Array<T>) => ComparerType<T>;

export function BuildSorter<T extends Sortable>() {
    const comparerGenerator = BuildComparerGenerator<T>();
    return (key: string, data: Array<T>) => SortInternal(comparerGenerator, key, data);
}

function SortInternal<T>(comparer: ComparerGenerator<T>, key: string, data: Array<T>) {
    return data.slice().sort(comparer(key, data));
}

function BuildComparerGenerator<T extends Sortable>() {
    let sortingState: SortingState;

    return (key: string, data: Array<T>): ComparerType<T> => {
        if (!data || !data.length || data.length === 1) {
            return () => 0;
        }

        if (sortingState && sortingState.key === key) {
            sortingState.ascending = !sortingState.ascending;
        }
        else {
            sortingState = {
                key: key,
                ascending: true
            }
        }

        let sortFunction: (a: T, b: T) => number;
        if (typeof(data[0][sortingState.key]) === 'string') {
            sortFunction = (a: T, b: T) => (<string>a[sortingState.key]).localeCompare(<string>b[sortingState.key]);
        } else if (typeof(data[0][sortingState.key]) === 'number') {
            sortFunction = (a: T, b: T) => (<number>a[sortingState.key]) - (<number>b[sortingState.key]);
        }

        if (sortFunction) {
            let directedSortFunction: (a: T, b: T) => number;
            if (sortingState.ascending) {
                directedSortFunction = sortFunction;
            } else {
                directedSortFunction = (a: T, b: T) => -sortFunction(a, b);
            }

            return directedSortFunction;
        }

        return () => 0;
    }
}

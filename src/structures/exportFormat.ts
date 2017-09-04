export interface AgentTypeProfile {
    Name: string;
    ModuleProfiles: ModuleProfile[];
    AgentProfiles: AgentProfile[];
    CycleProfile: CycleProfile;
    QueryProfiles: QueryProfile[];
}

export interface ModuleProfile {
    [key: string]: string | number;
    Name: string;
    Executions: number;
    TotalExecutionTime: number;
    ShortestExecutionTime: number;
    LongestExecutionTime: number;
    AverageExecutionTime: number;
}

export interface AgentProfile {
    Name: string;
    ModuleProfiles: ModuleProfile[];
    CycleProfile: CycleProfile;
    QueryProfiles: QueryProfile[];
}

export interface CycleProfile {
    [key: string]: string | number;
    Count: number;
    TotalTime: number;
    AverageTime: number;
    LowestTime: number;
    HighestTime: number;
    TotalActions: number;
    AverageActions: number;
    LowestActions: number;
    HighestActions: number;
    TotalBeliefs: number;
    AverageBeliefs: number;
    LowestBeliefs: number;
    HighestBeliefs: number;
    TotalQueries: number;
    AverageQueries: number;
    LowestQueries: number;
    HighestQueries: number;
    TotalPercepts: number;
    AveragePercepts: number;
    LowestPercepts: number;
    HighestPercepts: number;
    TotalGoals: number;
    AverageGoals: number;
    LowestGoals: number;
    HighestGoals: number;
    TotalMessagesReceived: number;
    AverageMessagesReceived: number;
    LowestMessagesReceived: number;
    HighestMessagesReceived: number;
    TotalMessagesSent: number;
    AverageMessagesSent: number;
    LowestMessagesSent: number;
    HighestMessagesSent: number;
}

export interface QueryProfile {
    [key: string]: string | number;
    Query: string;
    Hits: number;
    Misses: number;
    Times: number;
    TotalTime: number;
    AverageTime: number;
}

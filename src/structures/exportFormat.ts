export interface AgentTypeProfile {
    Name: string;
    ModuleProfiles: ModuleProfile[];
    AgentProfiles: AgentProfile[];
    CycleProfile: CycleProfile;
}

export interface ModuleProfile {
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
}

export interface CycleProfile {
    [key: string]: string | number;
}

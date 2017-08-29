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
    HighestQueries: number;
    TotalPercepts: number;
    AveragePercepts: number;
    LowestPercepts: number;
    HighestPercepts: number;
    TotalGoals: number;
    AverageGOals: number;
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

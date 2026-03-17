export const UserRoleEnum = {
    ADMIN: "admin",
    PROJECT_ADMIN: "project-admin",
    MEMBER: "member"
}

export const AvailbleUserRoles = Object.values(UserRoleEnum)

export const TaskStatusEnum = {
    TODO: "todo",
    IN_PROGRESS: "in-progress",
    DONE: "done"
}

export const AvailableTaskStatus = Object.values(TaskStatusEnum)

export const DB_NAME = 'project-management'

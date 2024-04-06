import Task from "./Task";

export default {
  component: Task,
  title: "Task",
  tags: ["autodocs"],
  args: {
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_INBOX",
    },
  },
};

export const Default = {};

export const Pinned = {
  args: {
    task: {
      state: "TASK_PINNED",
    },
  },
};

export const Archived = {
  args: {
    task: {
      state: "TASK_ARCHIVED",
    },
  },
};

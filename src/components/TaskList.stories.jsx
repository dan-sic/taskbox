import TaskList from "./TaskList";

import * as TaskStories from "./Task.stories";

export default {
  component: TaskList,
  title: "TaskList",
  decorator: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
  tags: ["autodocs"],
};

export const Default = {
  args: {
    tasks: [{ ...TaskStories.Default.args.task, id: "1", title: "Task 1" }],
    tasks: [{ ...TaskStories.Default.args.task, id: "2", title: "Task 2" }],
    tasks: [{ ...TaskStories.Default.args.task, id: "3", title: "Task 3" }],
  },
};

export const WithPinnedTasks = {
  args: {
    tasks: [
      ...Default.args.tasks.slice(0, 5),
      { id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" },
    ],
  },
};

export const Loading = {
  args: {
    tasks: [],
    loading: true,
  },
};

export const Empty = {
  args: {
    // Shaping the stories through args composition.
    // Inherited data coming from the Loading story.
    ...Loading.args,
    loading: false,
  },
};

import { CircleIcon, CheckCircledIcon, StopwatchIcon } from '@radix-ui/react-icons';

export interface Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
    dueDate: Date;
    createdAt: Date;
    updatedAt: Date;
}

type TaskStatus = "todo" | "in-progress" | "done";

export type CreateTaskInput = Omit<Task, 'id' | 'createdAt' | 'updatedAt'>

export type UpdateTaskInput = Partial<Task>

export const StatusConfig: Record<TaskStatus, {[k: string]: any}> = {
  todo: {
    icon: CircleIcon,
    color: 'gray',
    label: 'Todo'
  },
  'in-progress': {
    icon: StopwatchIcon,
    color: 'amber',
    label: 'In Progress'
  },
  done: {
    icon: CheckCircledIcon,
    color: 'green',
    label: 'Done'
  }
} as const;


export const isTaskDone = (task: Task): boolean => task.status === "done";

export const isOverdue = (task: Task) => {
  return new Date(task.dueDate) < new Date();
};

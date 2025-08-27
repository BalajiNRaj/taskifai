import { Card, Flex, Text, Button, Box, Badge } from '@radix-ui/themes';
import { isOverdue, isTaskDone, StatusConfig, Task } from '@/types/Task';
import { CalendarIcon, ExclamationTriangleIcon } from '@radix-ui/react-icons';
import { useMemo } from 'react';

interface TaskCardProps {
  task: Task;
  onEdit?: (task: Task) => void;
  onDelete?: (taskId: string) => void;
}

const formatDate = (date: Date) => {
  return new Date(date).toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric',
    year: 'numeric'
  });
};

export default function TaskCard({ task, onEdit, onDelete }: TaskCardProps) {
  const status = StatusConfig[task.status];
  const StatusIcon = status.icon;
  const isTaskOverdue = useMemo(() => isOverdue(task), [task.dueDate]);

  return (
    <Card size="2">
      <Flex direction="column" gap="3">
        <Flex justify="between" align="center">
          <Text as="div" size="3" weight="bold" trim="start">
            {task.title}
          </Text>
          <Badge color={status.color as any}>
            <Flex gap="1" align="center">
              <StatusIcon />
              <Text size="1">{status.label}</Text>
            </Flex>
          </Badge>
        </Flex>

        <Box>
          <Text as="div" color="gray" size="2" style={{ 
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}>
            {task.description}
          </Text>
        </Box>

        {!isTaskDone(task) && <Flex align="center" gap="2">
          <CalendarIcon />
          <Text size="1" color={isTaskOverdue ? 'red' : 'gray'}>
            Due {formatDate(task.dueDate)}
          </Text>
          {isTaskOverdue && (
            <Badge color="red" size="1">
              <Flex gap="1" align="center">
                <ExclamationTriangleIcon />
                <Text size="1">Overdue</Text>
              </Flex>
            </Badge>
          )}
        </Flex>}

        <Flex gap="3" mt="2">
          <Button size="1" variant="soft" onClick={() => onEdit?.(task)}>
            Edit
          </Button>
          <Button 
            size="1" 
            variant="soft" 
            color="red" 
            onClick={() => onDelete?.(task.id)}
          >
            Delete
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
}

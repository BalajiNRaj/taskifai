'use client'
import { Task, StatusConfig } from '@/types/Task';
import React, { useEffect, useState } from 'react'
import { Grid, Box, Flex, Text, Card } from '@radix-ui/themes';
import TaskCard from './TaskCard';

const mockTasks: Task[] = [
    {
        id: '1',
        title: 'Complete Project Documentation',
        description: 'Write comprehensive documentation for the Taskifai project, including setup instructions and API endpoints.',
        status: 'todo',
        dueDate: new Date('2025-09-01'),
        createdAt: new Date('2025-08-27'),
        updatedAt: new Date('2025-08-27')
    },
    {
        id: '2',
        title: 'Implement Task Filtering',
        description: 'Add filters to allow users to sort tasks by status, due date, and priority. Include search functionality.',
        status: 'in-progress',
        dueDate: new Date('2025-08-30'),
        createdAt: new Date('2025-08-26'),
        updatedAt: new Date('2025-08-27')
    },
    {
        id: '3',
        title: 'UI/UX Review',
        description: 'Review the current user interface, ensure consistent styling, and implement responsive design improvements.',
        status: 'done',
        dueDate: new Date('2025-08-25'),
        createdAt: new Date('2025-08-24'),
        updatedAt: new Date('2025-08-25')
    }
];

const TaskList = () => {
    const [groupedTasks, setGroupedTasks] = useState<Record<string, Task[]>>({});
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const taskGroup: Record<string, Task[]> = {};
        mockTasks.forEach(task => {
            if(!taskGroup[task.status]) taskGroup[task.status] = [];
            taskGroup[task.status].push(task);
        })

        setGroupedTasks(taskGroup);
        setLoading(false);
    }, [mockTasks]);

    if(loading) {
        return (<>Loading</>)
    }

    if(Object.keys(groupedTasks).length === 0) {
        return (<>No Tasks Found</>)
    }

    const handleEditTask = (task: Task) => {
        // TODO: Implement edit functionality
        console.log('Edit task:', task);
    };

    const handleDeleteTask = (taskId: string) => {
        // TODO: Implement delete functionality
        const updatedTasks = mockTasks.filter(task => task.id !== taskId);
        const taskGroup: Record<string, Task[]> = {};
        updatedTasks.forEach(task => {
            if(!taskGroup[task.status]) taskGroup[task.status] = [];
            taskGroup[task.status].push(task);
        });
        setGroupedTasks(taskGroup);
    };

    return (
        <Grid columns="3" gap="3" width="auto">
            {Object.entries(StatusConfig).map(([status, config]) => (
                <Box key={status}>
                    <Card size="2" style={{ height: '100%' }}>
                        <Flex direction="column" gap="3">
                            <Flex justify="between" align="center" py="2">
                                <Text size="2" weight="bold">
                                    {config.label}
                                </Text>
                                <Text size="2" color="gray">
                                    {groupedTasks[status]?.length || 0}
                                </Text>
                            </Flex>
                            <Flex direction="column" gap="2">
                                {groupedTasks[status]?.map(task => (
                                    <TaskCard
                                        key={task.id}
                                        task={task}
                                        onEdit={handleEditTask}
                                        onDelete={handleDeleteTask}
                                    />
                                ))}
                            </Flex>
                        </Flex>
                    </Card>
                </Box>
            ))}
        </Grid>
    );
}

export default TaskList;
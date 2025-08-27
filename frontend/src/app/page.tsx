import TaskList from '@/components/tasks/TaskList';
import { Container, Flex, Heading, Text, Button, Card, Link } from '@radix-ui/themes';
import styles from './page.module.css';

export default function Home() {
  return (
    <Container size="3">
      <Flex direction="column" gap="6" align="center" pt="9">
        <Heading size="8" align="center" className={styles.title}>
          Taskif<span className={styles.highlight}>ai</span>
        </Heading>
      </Flex>
      <Flex direction="column" gap="6" py="9">
        <TaskList />
      </Flex>
    </Container>
  );
}

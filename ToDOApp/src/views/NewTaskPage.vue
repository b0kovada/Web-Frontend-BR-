<template>
    <TaskForm @submit="addTask" />
</template>

<script>
import { useTasksStore } from '../stores/tasks';
import TaskForm from '../components/TaskForm.vue';

export default {
  components: { TaskForm },
  setup() {
    const store = useTasksStore();

    const addTask = (task) => {
      store.addTask(task);
      window.location.href = '/tasks';
    };

    return { addTask };
  },
};
</script>

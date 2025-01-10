<template>
    <TaskForm @submit="addTask" />
</template>

<script>
    import { useTasksStore } from '../stores/tasks';
    import TaskForm from '../components/TaskForm.vue';
    import { useRouter } from 'vue-router';

    export default {
        components: { TaskForm },
        setup() {
            const store = useTasksStore();
            const router = useRouter();

            const addTask = (task) => {
                store.addTask(task);
                router.push('/tasks');
            };

            return { addTask };
        },
    };
</script>

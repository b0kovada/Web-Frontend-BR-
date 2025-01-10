<template>
    <TaskForm :taskData="task" @submit="updateTask" />
</template>

<script>
    import { useTasksStore } from '../stores/tasks';
    import TaskForm from '../components/TaskForm.vue';
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';

    export default {
        components: { TaskForm },
        props: ['id'],
        setup(props) {
            const store = useTasksStore();
            const router = useRouter();

            const task = ref(store.tasks.find((t) => t.id === Number(props.id)));

            const updateTask = (updatedTask) => {
                store.updateTask(updatedTask);
                router.push('/tasks');
            };

            return { task, updateTask };
        },
    };
</script>

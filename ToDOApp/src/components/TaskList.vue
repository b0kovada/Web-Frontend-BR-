<template>
    <div class="container">
        <ul class="task-list">
            <li class="task-item" v-for="task in tasks" :key="task.id">
                <div class="task-info">
                    <div class="task-title">{{ task.title }}</div>
                    <div class="task-deadline">Határidő: {{ task.deadline }}</div>
                </div>
                <div class="task-actions">
                    <button @click="toggleTaskStatus(task.id)">
                        {{ task.isFinished ? 'Újra nyit' : 'Kész' }}
                    </button>
                    <button class="secondary" @click="editTask(task.id)">Szerkesztés</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import { useTasksStore } from '../store/tasks';
    import { useRouter } from 'vue-router';

    export default {
        setup() {
            const store = useTasksStore();
            const router = useRouter();

            const toggleTaskStatus = (id) => {
                store.toggleTaskStatus(id);
            };

            const editTask = (id) => {
                router.push(`/edittask/${id}`);
            };

            return { tasks: store.tasks, toggleTaskStatus, editTask };
        },
    };
</script>

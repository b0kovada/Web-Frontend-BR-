<template>
    <div>
        <h1>Feladatok</h1>
        <ul>
            <li v-for="task in tasks" :key="task.id">
                <h3>{{ task.title }}</h3>
                <p>{{ task.desc }}</p>
                <p>Határidő: {{ task.deadline }}</p>
                <button @click="toggleStatus(task.id)">
                    {{ task.isFinished ? 'Újranyitás' : 'Kész' }}
                </button>
                <button v-if="!task.isFinished" @click="$router.push(`/edittask/${task.id}`)">Szerkesztés</button>
            </li>
        </ul>
    </div>
</template>

<script>
    import { useTasksStore } from '../stores/tasks';
    export default {
        setup() {
            const store = useTasksStore();
            const tasks = store.tasks;
            const toggleStatus = store.toggleTaskStatus;
            return { tasks, toggleStatus };
        },
    };
</script>
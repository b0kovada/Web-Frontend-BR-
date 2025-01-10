import { defineStore } from 'pinia';

export const useTasksStore = defineStore('tasks', {
    state: () => ({
        tasks: [
            { id: 1, title: 'Első feladat', desc: 'Ez egy minta feladat', isFinished: false, deadline: '2025-01-15' },
        ],
    }),
    actions: {
        addTask(task) {
            this.tasks.push({ id: Date.now(), ...task });
        },
        updateTask(updatedTask) {
            const index = this.tasks.findIndex((task) => task.id === updatedTask.id);
            if (index !== -1) {
                this.tasks[index] = updatedTask;
            }
        },
        toggleTaskStatus(taskId) {
            const task = this.tasks.find((task) => task.id === taskId);
            if (task) task.isFinished = !task.isFinished;
        },
    },
});

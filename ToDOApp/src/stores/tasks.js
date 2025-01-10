import { defineStore } from 'pinia';

export const useTasksStore = defineStore('tasks', {
    state: () => ({
        tasks: [],
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

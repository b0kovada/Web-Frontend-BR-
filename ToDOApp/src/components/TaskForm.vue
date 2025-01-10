<template>
    <form @submit.prevent="handleSubmit">
        <label for="title">Cím:</label>
        <input v-model="task.title" id="title" required />

        <label for="desc">Leírás:</label>
        <textarea v-model="task.desc" id="desc" required></textarea>

        <label for="deadline">Határidő:</label>
        <input type="date" v-model="task.deadline" id="deadline" required />

        <button type="submit">Mentés</button>
    </form>
</template>

<script>
    export default {
        props: {
            taskData: {
                type: Object,
                default: () => ({ title: '', desc: '', deadline: '', isFinished: false }),
            },
        },
        data() {
            return {
                task: { ...this.taskData },
            };
        },
        emits: ['submit'],
        methods: {
            handleSubmit() {
                this.$emit('submit', this.task);
            },
        },
    };
</script>

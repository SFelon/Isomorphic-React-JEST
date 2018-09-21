let count = 0;
export default {
    __setCount(_count) {
        count = _count;
    },

    async getNotifications(){
        console.warn("Good JOB! USING MOCK SERVICE!");
        return { count };
    }
};

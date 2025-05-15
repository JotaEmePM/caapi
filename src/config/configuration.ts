export default () => ({
    environment: process.env.APP_ENV || 'development',
})

export const getMongoConnectionString = (): string => {
    return `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_USERNAME}@${process.env.MONGO_URL}/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`
}


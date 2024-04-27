export type Environment = keyof typeof environment;

const environment = {
    HOST: process.env.HOST || '',
    PORT: Number(process.env.PORT) || 5050,
    API_DATENAGER_URL: process.env.API_DATENAGER_URL || "https://date.nager.at",
    API_DATENAGER_PATH_PUBLICHOLYDAYS: process.env.API_DATENAGER_URL || "/api/v3/publicholidays",
};

export default environment;
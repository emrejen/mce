export const isDevelopmentMode = () => process.env.NODE_ENV === 'development';
export const isProductionMode = () => !isDevelopmentMode();

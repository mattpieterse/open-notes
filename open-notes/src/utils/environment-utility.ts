export const isTauriApp = (): boolean => {
    return ((typeof window !== 'undefined') && (('__TAURI__' in window)));
};
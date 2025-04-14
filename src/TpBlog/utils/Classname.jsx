export function activeClassIf (condition, defaultClassName) {
    if(!condition) {
        return defaultClassName
    }
    if (!defaultClassName){
        return 'active'
    }
    return `active ${defaultClassName}`
}
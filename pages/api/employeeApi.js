import http from './index'

const getAll=() =>{
    return http.get("employee/");
}
const getEmployee= id=>{
    return http.get(`employee/${id}`);
}
const createEmployee = data=>{
    return http.post("employee/",data);
}
const updateEmployee = (id,data)=>{
    return http.put(`employee/${id}`,data);
}
const removeEmployee = id =>{
    return http.delete(`employee/${id}`);
};

export default {
    getAll,
    getEmployee,
    createEmployee,
    updateEmployee,
    removeEmployee
}
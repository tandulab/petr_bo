import{ae as u,ah as p,aq as a,ai as n,ar as i,ad as c}from"./usetoast.esm12394.js";class o{static async fetchAll(e){return(await u("/user_groups",e)).data}static async getGroupDetail(e){return(await u(`/user_groups/${e}`)).data.user_groups}static async createGroup(e){return(await p("/user_groups",e)).data.user_group}static async deleteGroup(e){return(await a(`/user_groups/${e}`)).data}static async updateGroup(e){return(await n(`/user_groups/${e.user_group.id}`,e)).data.user_group}static async addUserToGroup(e){const r=e.group_id;return delete e.group_id,(await p(`/user_groups/${r}/add_user`,e)).data.user_group}static async deleteUserFromGroup(e){const r=e.group_id;return delete e.group_id,(await a(`/user_groups/${r}/remove_user/${e.user_group.user_id}`,e)).data.user_group}static async importUsersToGroup(e){const r=e.group_id;return delete e.group_id,(await i(`/user_groups/${r}/import_users`,e.formData)).data.user_groups}}const d=c({id:"group",state:()=>({group:{},groups:[],response_groups:{},num_users:0}),getters:{allGroups:s=>s.response_groups.user_groups,responseGroups:s=>s.response_groups,getTotalGroups:s=>s.response_groups?s.response_groups.total:0,getCurrentGroup:s=>s.group,getNumUsers:s=>s.num_users},actions:{async fetchAllGroups(s){await o.fetchAll(s).then(e=>this.response_groups=e)},async fetchGroupDetail(s){await o.getGroupDetail(s).then(e=>this.group=e)},async createGroup(s){await o.createGroup(s).then(e=>this.group=e)},async updateGroup(s){await o.updateGroup(s).then(e=>this.group=e)},async deleteGroup(s){await o.deleteGroup(s).then(e=>this.group=e)},async addUserToGroup(s){await o.addUserToGroup(s).then(e=>this.group=e)},async deleteUserFromGroup(s){await o.deleteUserFromGroup(s).then(e=>this.group=e)},async importUsersToGroup(s){await o.importUsersToGroup(s).then(e=>this.num_users=+e.users_counter)},updateResponseGroup(s){this.response_groups=Object.assign([],s)}}});export{d as u};
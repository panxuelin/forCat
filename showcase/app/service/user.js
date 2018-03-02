const Service=require('egg').Service;
class UserService extends Service{
    async find(uid){
        const user=await this.app.mysql.get('cat_user',{id:uid});
        return {user};
    }
    async add({name,age,openId}){
        const result=await this.app.mysql.insert('cat_user',{name:name,age:age,openId:openId,creatTime:new Date(),latestLoginTime:new Date()});
        console.log(result);
        console.log(result.affectedRows === 1);
    }
}
module.exports=UserService;
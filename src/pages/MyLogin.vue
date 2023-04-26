<template>
    <!-- login界面 -->
    <div class="mylogin">
        <!-- login盒子 -->
        <div class="loginbox">
            <!-- 头部盒子 -->
            <div class="logo-user">
                <!-- 圆形logo -->
                <div class="logo">
                    LOGO
                </div>
            </div>
            <!-- 输入框 -->
            <van-form @submit="onSubmit">
                <van-cell-group inset>
                    <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名"
                        :rules="[{ required: true, message: '请填写用户名' }]" />
                    <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码"
                        :rules="[{ required: true, message: '请填写密码' }]" />
                </van-cell-group>

                <input class="remenber" type="checkbox"><span class="remenber-pwd">记住密码</span>
                <div style="margin: 16px;">
                    <van-button round block type="primary" native-type="submit">
                        提交
                    </van-button>
                </div>
            </van-form>
            <div class="other">
                <div class="register">
                    注册账号
                </div>
                <div class="forget">
                    忘记密码
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.mylogin {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-image: url('https://s1.ax1x.com/2023/04/26/p9MSsRH.jpg');
    background-size: cover;
    opacity: 0.7;

}

.loginbox {
    width: 400px;
    height: 500px;
    background-color: #fff;
    border-radius: 10px;

    .logo-user {
        width: 100%;
        height: 200px;
        background-color: #ccc;
        display: flex;
        justify-content: center;
        align-items: center;

        .logo {
            width: 100px;
            height: 100px;
            line-height: 100px;
            text-align: center;
            background-color: rgb(9, 25, 241);
            font-size: 20px;
            color: #fff;
            border-radius: 50px;
        }
    }
}

.remenber {
    margin-left: 30px;
}

.remenber-pwd {
    margin-left: 10px;
}

.other{
    display: flex;
    width: 100%;
    .register{
       width: 50%;
       text-align: center;
       border-right: 2px solid black;
    }
    .forget{
        width: 50%;
        text-align: center;
    }
}
</style>
<script setup>

</script>

<template>
    <div class="privacy-content-wrap">
        <div class="content">
            <h1>慧搜App隐私政策</h1>
            <p>慧搜App使用过程中仅依赖必须的相册权限，App以及开发者不会收集任何用户数据。</p>
            <p>本地模型计算不依赖网络服务，请放心使用。</p>

            <p>必要的应用授权：</p>
            <p>1. 存储读写权限：构建本地索引以及预览时允许删除图片操作</p>
            <p>2. 发送通知权限：构建索引任务耗时，允许切后台运行，切后台运行时允许发送通知</p>
        </div>
    </div>
</template>

<style>
    .privacy-content-wrap {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .privacy-content-wrap .content {
        display: flex;
        flex-direction: column;
        line-height: 40px;
    }
    @media(width < 1024px) {
        h1 {
            margin: 20px 0;
        }
        .privacy-content-wrap .content {
            margin: 10px;
        }
    }
    @media(min-width: 1024px) {
        .privacy-content-wrap {
            width: 90vw;
        }
        .privacy-content-wrap .content { 
            width: 50vw;
        }
    }
</style>
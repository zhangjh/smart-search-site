<script setup>

</script>

<template>
    <div class="guide-content-wrap">
        <div class="content">
            <h1 class="title">慧搜--使用说明</h1>
            <section class="light">
                <h2>1. 慧搜是什么，它有什么用？</h2>
                <p>你一定遇到过这样的时候：突然想起来曾经有一张很有趣的图，它就躺在你的手机相册里，但是奈何相册图片实在太多翻不过来。<br>
使用慧搜，你可以使用任何你能想到的关于图片的描述信息来寻找你想要的某张图片。如”红色的花“、”可爱的小朋友“、”两个人的合照“、”傍晚的夕阳“、”海边看日出“、”表情包“、”结婚啦“……<br>
而这一切，都仅仅发生在你的设备本地，它不需要联网，你也不用担心隐私泄露，你的相册、你的搜索，只有你知道。</p>
            </section>
            <section class="dark">
                <h2>2. 怎样使用慧搜？</h2>
                <p>使用慧搜主要分为两步：构建索引&检索图片。<br>
                    首次运行时，APP需要为你的图片建立索引。视手机性能和图片总数而定，可能需要一段时间。

                    不过你不用一直等待它完成，构建任务可以后台运行。<br>

                    构建任务完成后，你可以使用任何你想到的描述信息来检索你的图片库。当有新的图片加入时，在下次打开APP时，你可以通过增量构建将它们纳入你的索引库。</p>
            </section>
            <section class="light">
                <h2>3. 它为什么要请求我的相册？我的照片隐私会不会泄露？</h2>
                <p>慧搜需要请求必要的应用权限，比如相册的读写权限，读取相册构建本地索引是它得以运作的必要前提，应用也有部分的图片管理功能，如在检索到相关图片时，你可以进行删除，所以需要请求写权限。<br>
                然而你完全不需要担心隐私问题，慧搜通过加载人工智能模型，完完全全运行在本地不需要联网，这也是为什么安装文件有几百兆的原因。<br>
                你甚至可以在关闭网络权限的时候运行它，这样它就绝无可能将你的图片上传到任何其他地方。因此请相信使用慧搜是完全不需要担心隐私问题。
                </p>
            </section>
            <section class="dark">
                <h2>4. 对设备有要求吗？</h2>
                <p>由于需要运行人工智能模型，慧搜对手机性能有一定的要求。请至少保证你的手机Android版本在10.0及以上。<br></p>
            </section>
            <section class="light">
                <h2>6. 反馈意见或需求帮助</h2>
                <p>遇到问题或者反馈问题，甚至仅仅想沟通交流，请邮件联系：zhangjh_initial@126.com</p>
            </section>
        </div>
    </div>
</template>

<style>
    .guide-content-wrap {
        width: 90vw;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .guide-content-wrap .content {
        width: 70vw;
        display: flex;
        flex-direction: column;
        line-height: 40px;
    }
    .title {
        text-align: center;
    }

    section {
        margin: 10px 0;
        padding: 10px;
    }

    section p {
        font-size: 0.8rem;
        line-height: 1.5rem;
    }

    .light {
        background-color: #95c1e4;
        color: #14283d;
    }

    .dark {
        background-color: #5da1d3;
        color: #f3f7fc;
    }

</style>
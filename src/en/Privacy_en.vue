<script setup>

</script>

<template>
    <div class="privacy-content-wrap">
        <div class="content">
            <h1>SmartSearch App Privacy Policy</h1>
            <p>During the use of SmartSearch App, only the necessary album permissions are relied upon. The App and the developer will not collect any user data.</p>
            <p>Local model calculations do not rely on network services, please feel free to use.</p>

            <p>Necessary application permissions:</p>
            <p>1. Storage read and write permissions: Need to scan photos to build index and delete photos when preview photos.</p>
            <p>Optional application permissions:</p>
            <p>2. Notification sending permissions: Image index building task is time-consuming, need to send notifications when build task running on the background.</p>
            <p>FeedBack & Contact:</p>
            <p>Problems feedbacking or want to contact, email to: zhangjh_initial@126.com</p>
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
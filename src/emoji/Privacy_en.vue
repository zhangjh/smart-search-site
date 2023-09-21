<script setup>

</script>

<template>
    <div class="privacy-content-wrap">
        <div class="content">
            <h1>Emoji avatar App Privacy Policy</h1>
            <p>The App and the developer will not collect any user data.</p>
            <p>App run progress only depend on the network services, please feel free to use.</p>

            <p>Necessary application authorizations:</p>
            <p>1. Network is required for connect the backend service to generate emoji pictures.</p>
            <p>2. Storage read and write permissions: Need to download the generated pictures.</p>
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
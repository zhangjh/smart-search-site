<script setup>

</script>

<template>
    <div class="guide-content-wrap">
        <div class="content">
            <h1 class="title">SmartSearch--User Guide</h1>
            <section class="light">
                <h2>1. What is SmartSearch and what is it used for?</h2>
                <p>You must have experienced this: suddenly you remember that there was once a very interesting picture, which is lying in your phone's photo album, but there are just too many photos in the album to go through.
With SmartSearch, you can use any description you can think of about the picture to find the specific image you want, such as "red flowers", "cute children", "photos of two people together", "evening sunset", "watching the sunrise by the sea", "emoji", "got married"...
And all of this happens only on your local device, without the need for internet connection. You don't have to worry about privacy leaks, as only you know about your album and your search.</p>
            </section>
            <section class="dark">
                <h2>2. How to use SmartSearch?</h2>
                <p>Using SmartSearch mainly consists of two steps: building the index & retrieving images.<br/>
When running for the first time, the app needs to create an index for your images. Depending on the performance of your phone and the total number of pictures, this may take some time. However, you don't have to wait for it to complete, as the building task can run in the background.<br/>
After the building task is completed, you can use any description you can think of to search your image library. When new images are added, you can include them in your index library through incremental building the next time you open the app.</p>
            </section>
            <section class="light">
                <h2>3. Why does it request access to my photo album? Will my photo privacy be leaked?</h2>
                <p>SmartSearch needs to request necessary application permissions, such as read and write permissions for the photo album. Reading the album to build a local index is a prerequisite for its operation, and the app also has some image management functions, such as deleting images when they are retrieved, so write permissions are required.<br/>

However, you don't have to worry about privacy issues at all. SmartSearch operates entirely locally without the need for an internet connection expect for the first time running: download text and image models.

You can even run it with the network permissions turned off, so there is absolutely no possibility of your images being uploaded anywhere else. Therefore, please be assured that using SmartSearch does not involve any privacy concerns.
                </p>
            </section>
            <section class="dark">
                <h2>4. Any device requirements?</h2>
                <p>Due to the need to run artificial intelligence models, SmartSearch has certain requirements for phone performance. Please make sure your Android phone version is at least 10.0 or above.<br></p>
            </section>
            <section class="light">
                <h2>6. Feedback or need help</h2>
                <p>If you encounter any issues, have feedback, or simply want to communicate, please contact us by email: zhangjh_initial@126.com</p>
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

    @media(width < 1024px) {
        .guide-content-wrap .content {
            width: 90vw;
        }
    }
    
    @media (min-width: 1024px) {
        .guide-content-wrap .content {
            width: 70vw;
        }
    }

</style>
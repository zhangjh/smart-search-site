<script setup>

</script>

<template>
  <div class="guide-container">
    <div class="container">
      <header class="guide-header">
        <h1 class="guide-title">SmartSearch User Guide</h1>
        <p class="guide-subtitle">Complete guide for AI text-to-image search app</p>
      </header>

      <div class="guide-content">
        <section class="guide-section">
          <div class="section-number">01</div>
          <h2 class="section-title">What is SmartSearch and what is it used for?</h2>
          <div class="section-content">
            <p>You must have experienced this: suddenly you remember that there was once a very interesting picture, which is lying in your phone's photo album, but there are just too many photos in the album to go through.</p>
            <p>With SmartSearch, you can use any description you can think of about the picture to find the specific image you want, such as "red flowers", "cute children", "photos of two people together", "evening sunset", "watching the sunrise by the sea", "emoji", "got married"...</p>
            <p class="highlight">And all of this happens only on your local device, without the need for internet connection. You don't have to worry about privacy leaks, as only you know about your album and your search.</p>
          </div>
        </section>

        <section class="guide-section">
          <div class="section-number">02</div>
          <h2 class="section-title">How to use SmartSearch?</h2>
          <div class="section-content">
            <p>Using SmartSearch mainly consists of two steps: <strong>building the index</strong> & <strong>retrieving images</strong>.</p>
            <p>When running for the first time, the app needs to create an index for your images. Depending on the performance of your phone and the total number of pictures, this may take some time.</p>
            <p>However, you don't have to wait for it to complete, as the building task can run in the background.</p>
            <p>After the building task is completed, you can use any description you can think of to search your image library. When new images are added, you can include them in your index library through incremental building the next time you open the app.</p>
          </div>
        </section>

        <section class="guide-section">
          <div class="section-number">03</div>
          <h2 class="section-title">Privacy & Security</h2>
          <div class="section-content">
            <p><strong>Why does it request access to my photo album? Will my photo privacy be leaked?</strong></p>
            <p>SmartSearch needs to request necessary application permissions, such as read and write permissions for the photo album. Reading the album to build a local index is a prerequisite for its operation, and the app also has some image management functions, such as deleting images when they are retrieved, so write permissions are required.</p>
            <p class="highlight">However, you don't have to worry about privacy issues at all. SmartSearch operates entirely locally without the need for an internet connection except for the first time running: download text and image models.</p>
            <p>You can even run it with the network permissions turned off, so there is absolutely no possibility of your images being uploaded anywhere else. Therefore, please be assured that using SmartSearch does not involve any privacy concerns.</p>
          </div>
        </section>

        <section class="guide-section">
          <div class="section-number">04</div>
          <h2 class="section-title">Device Requirements</h2>
          <div class="section-content">
            <p>Due to the need to run artificial intelligence models, SmartSearch has certain requirements for phone performance.</p>
            <p><strong>Minimum Requirements:</strong> Android 10.0 or above</p>
            <p><strong>Recommended:</strong> 4GB RAM or more for smoother experience</p>
          </div>
        </section>

        <section class="guide-section">
          <div class="section-number">05</div>
          <h2 class="section-title">Feedback & Help</h2>
          <div class="section-content">
            <p>If you encounter any issues, have feedback, or simply want to communicate, please contact us through:</p>
            <div class="contact-info">
              <p><strong>Email:</strong> zhangjh_initial@126.com</p>
            </div>
          </div>
        </section>
      </div>

      <footer class="guide-footer">
        <div class="footer-links">
          <a href="/index_en.html" class="footer-link">Back to Home</a>
          <a href="/privacy_en.html" class="footer-link">Privacy Policy</a>
        </div>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.guide-container {
  min-height: 100vh;
  background-color: #2b73af;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
}

.guide-header {
  text-align: center;
  padding: 60px 0 40px 0;
}

.guide-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 16px 0;
  color: white;
}

.guide-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  margin: 0;
}

.guide-content {
  padding-bottom: 60px;
}

.guide-section {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 30px;
  margin-bottom: 30px;
  position: relative;
  transition: all 0.3s ease;
}

.guide-section:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.guide-section:nth-child(even) {
  background: #95c1e4;
  color: #14283d;
}

.guide-section:nth-child(even) .section-number {
  background: #2b73af;
  color: white;
}

.section-number {
  position: absolute;
  top: -15px;
  left: 30px;
  background: #e2d849;
  color: #14283d;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 20px 0;
  padding-top: 10px;
}

.section-content {
  line-height: 1.8;
}

.section-content p {
  margin: 0 0 16px 0;
  font-size: 1rem;
}

.section-content p:last-child {
  margin-bottom: 0;
}

.highlight {
  background: rgba(226, 216, 73, 0.2);
  padding: 16px;
  border-radius: 8px;
  border-left: 4px solid #e2d849;
  font-weight: 500;
}

.guide-section:nth-child(even) .highlight {
  background: rgba(43, 115, 175, 0.1);
  border-left-color: #2b73af;
}

.contact-info {
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 8px;
  margin-top: 16px;
}

.guide-section:nth-child(even) .contact-info {
  background: rgba(20, 40, 61, 0.1);
}

.guide-footer {
  padding: 40px 0;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-links {
  display: flex;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;
}

.footer-link {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;
  padding: 8px 0;
  border-bottom: 2px solid transparent;
}

.footer-link:hover {
  color: white;
  border-bottom-color: rgba(255, 255, 255, 0.5);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .guide-header {
    padding: 40px 0 30px 0;
  }
  
  .guide-title {
    font-size: 2rem;
  }
  
  .guide-subtitle {
    font-size: 1rem;
  }
  
  .guide-section {
    padding: 25px 20px;
    margin-bottom: 20px;
  }
  
  .section-number {
    left: 20px;
    width: 35px;
    height: 35px;
    font-size: 1rem;
  }
  
  .section-title {
    font-size: 1.3rem;
  }
  
  .footer-links {
    flex-direction: column;
    gap: 15px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 15px;
  }
  
  .guide-title {
    font-size: 1.8rem;
  }
  
  .guide-section {
    padding: 20px 15px;
  }
  
  .section-number {
    left: 15px;
    width: 30px;
    height: 30px;
    font-size: 0.9rem;
  }
  
  .section-title {
    font-size: 1.2rem;
  }
}
</style>
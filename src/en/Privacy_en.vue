<script setup>

</script>

<template>
  <div class="privacy-container">
    <div class="container">
      <header class="privacy-header">
        <h1 class="privacy-title">SmartSearch App Privacy Policy</h1>
        <p class="privacy-subtitle">Protecting your privacy is our top priority</p>
      </header>

      <div class="privacy-content">
        <section class="privacy-section">
          <h2 class="section-title">Developer Information</h2>
          <div class="section-content">
            <p><strong>Entity Name:</strong> Yiwu Taichu Software Studio</p>
          </div>
        </section>

        <section class="privacy-section highlight-section">
          <h2 class="section-title">Privacy Commitment</h2>
          <div class="section-content">
            <div class="privacy-promise">
              <p class="promise-text">During the use of SmartSearch App, only the necessary album permissions are relied upon. The App and the developer will not collect any user data.</p>
              <p class="promise-text">Local model calculations do not rely on network services, please feel free to use.</p>
            </div>
          </div>
        </section>

        <section class="privacy-section">
          <h2 class="section-title">Permission Details</h2>
          <div class="section-content">
            <div class="permission-group">
              <h3 class="permission-title">Required Permissions</h3>
              <div class="permission-item">
                <div class="permission-icon">📁</div>
                <div class="permission-details">
                  <h4>Storage Read & Write Permissions</h4>
                  <p>Need to scan photos to build index and delete photos when preview photos</p>
                </div>
              </div>
            </div>

            <div class="permission-group">
              <h3 class="permission-title">Optional Permissions</h3>
              <div class="permission-item">
                <div class="permission-icon">🔔</div>
                <div class="permission-details">
                  <h4>Notification Permissions</h4>
                  <p>Image index building task is time-consuming, need to send notifications when build task running on the background</p>
                </div>
              </div>
            </div>

            <div class="no-other-permissions">
              <p>✅ No other application permissions required</p>
            </div>
          </div>
        </section>

        <section class="privacy-section">
          <h2 class="section-title">Data Security</h2>
          <div class="section-content">
            <div class="security-features">
              <div class="security-item">
                <div class="security-icon">🔒</div>
                <div class="security-text">
                  <h4>Fully Local Operation</h4>
                  <p>All AI computations are performed locally on your device, no internet required</p>
                </div>
              </div>
              <div class="security-item">
                <div class="security-icon">🚫</div>
                <div class="security-text">
                  <h4>Zero Data Collection</h4>
                  <p>We do not collect, store, or transmit any user data</p>
                </div>
              </div>
              <div class="security-item">
                <div class="security-icon">🛡️</div>
                <div class="security-text">
                  <h4>Privacy Protection</h4>
                  <p>Your photos and search records are stored only on your local device</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="privacy-section">
          <h2 class="section-title">Feedback & Contact</h2>
          <div class="section-content">
            <p>If you have problems, feedback, or want to contact us, please reach out through:</p>
            <div class="contact-info">
              <div class="contact-item">
                <div class="contact-icon">📧</div>
                <div class="contact-details">
                  <h4>Email Contact</h4>
                  <p>zhangjh_initial@126.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer class="privacy-footer">
        <div class="footer-links">
          <a href="/index_en.html" class="footer-link">Back to Home</a>
          <a href="/guide_en.html" class="footer-link">User Guide</a>
        </div>
        <p class="footer-text">Last Updated: July 2024</p>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.privacy-container {
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

.privacy-header {
  text-align: center;
  padding: 60px 0 40px 0;
}

.privacy-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 16px 0;
  color: white;
}

.privacy-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  margin: 0;
}

.privacy-content {
  padding-bottom: 60px;
}

.privacy-section {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 30px;
  margin-bottom: 30px;
  transition: all 0.3s ease;
}

.privacy-section:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.highlight-section {
  background: #95c1e4;
  color: #14283d;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 20px 0;
  color: inherit;
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

.privacy-promise {
  background: rgba(226, 216, 73, 0.2);
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #e2d849;
}

.promise-text {
  font-weight: 500;
  margin: 0 0 12px 0;
}

.promise-text:last-child {
  margin-bottom: 0;
}

.permission-group {
  margin-bottom: 30px;
}

.permission-group:last-child {
  margin-bottom: 0;
}

.permission-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 16px 0;
  color: #e2d849;
}

.permission-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  background: rgba(255, 255, 255, 0.05);
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 12px;
}

.permission-item:last-child {
  margin-bottom: 0;
}

.permission-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.permission-details h4 {
  margin: 0 0 8px 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.permission-details p {
  margin: 0;
  opacity: 0.9;
  font-size: 0.95rem;
}

.no-other-permissions {
  background: rgba(76, 175, 80, 0.2);
  padding: 16px;
  border-radius: 8px;
  text-align: center;
  margin-top: 20px;
}

.no-other-permissions p {
  margin: 0;
  font-weight: 600;
  color: #4CAF50;
}

.security-features {
  display: grid;
  gap: 20px;
}

.security-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  background: rgba(255, 255, 255, 0.05);
  padding: 20px;
  border-radius: 8px;
}

.security-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.security-text h4 {
  margin: 0 0 8px 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.security-text p {
  margin: 0;
  opacity: 0.9;
  font-size: 0.95rem;
}

.contact-info {
  margin-top: 20px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 16px;
  background: rgba(255, 255, 255, 0.05);
  padding: 20px;
  border-radius: 8px;
}

.contact-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.contact-details h4 {
  margin: 0 0 4px 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.contact-details p {
  margin: 0;
  opacity: 0.9;
  font-size: 0.95rem;
}

.privacy-footer {
  padding: 40px 0;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-links {
  display: flex;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
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

.footer-text {
  margin: 0;
  opacity: 0.6;
  font-size: 0.9rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .privacy-header {
    padding: 40px 0 30px 0;
  }
  
  .privacy-title {
    font-size: 2rem;
  }
  
  .privacy-subtitle {
    font-size: 1rem;
  }
  
  .privacy-section {
    padding: 25px 20px;
    margin-bottom: 20px;
  }
  
  .section-title {
    font-size: 1.3rem;
  }
  
  .permission-item,
  .security-item,
  .contact-item {
    flex-direction: column;
    text-align: center;
    gap: 12px;
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
  
  .privacy-title {
    font-size: 1.8rem;
  }
  
  .privacy-section {
    padding: 20px 15px;
  }
  
  .section-title {
    font-size: 1.2rem;
  }
}
</style>
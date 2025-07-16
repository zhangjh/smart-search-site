<script setup>

</script>

<template>
  <div class="privacy-container">
    <div class="container">
      <header class="privacy-header">
        <h1 class="privacy-title">慧搜App隐私政策</h1>
        <p class="privacy-subtitle">保护您的隐私是我们的首要任务</p>
      </header>

      <div class="privacy-content">
        <section class="privacy-section">
          <h2 class="section-title">开发者信息</h2>
          <div class="section-content">
            <p><strong>主体名称：</strong>义乌市太初软件工作室</p>
          </div>
        </section>

        <section class="privacy-section highlight-section">
          <h2 class="section-title">隐私承诺</h2>
          <div class="section-content">
            <div class="privacy-promise">
              <p class="promise-text">慧搜App使用过程中仅依赖必须的相册权限，App以及开发者不会收集任何用户数据。</p>
              <p class="promise-text">本地模型计算不依赖网络服务，请放心使用。</p>
            </div>
          </div>
        </section>

        <section class="privacy-section">
          <h2 class="section-title">权限说明</h2>
          <div class="section-content">
            <div class="permission-group">
              <h3 class="permission-title">必要权限</h3>
              <div class="permission-item">
                <div class="permission-icon">📁</div>
                <div class="permission-details">
                  <h4>存储读写权限</h4>
                  <p>用于构建本地索引以及预览时允许删除图片操作</p>
                </div>
              </div>
            </div>

            <div class="permission-group">
              <h3 class="permission-title">可选权限</h3>
              <div class="permission-item">
                <div class="permission-icon">🔔</div>
                <div class="permission-details">
                  <h4>发送通知权限</h4>
                  <p>构建索引任务耗时，允许切后台运行，切后台运行时允许发送通知</p>
                </div>
              </div>
            </div>

            <div class="no-other-permissions">
              <p>✅ 无需任何其他应用权限</p>
            </div>
          </div>
        </section>

        <section class="privacy-section">
          <h2 class="section-title">数据安全</h2>
          <div class="section-content">
            <div class="security-features">
              <div class="security-item">
                <div class="security-icon">🔒</div>
                <div class="security-text">
                  <h4>完全本地运行</h4>
                  <p>所有AI计算均在设备本地进行，无需联网</p>
                </div>
              </div>
              <div class="security-item">
                <div class="security-icon">🚫</div>
                <div class="security-text">
                  <h4>零数据收集</h4>
                  <p>不收集、不存储、不传输任何用户数据</p>
                </div>
              </div>
              <div class="security-item">
                <div class="security-icon">🛡️</div>
                <div class="security-text">
                  <h4>隐私保护</h4>
                  <p>您的相册和搜索记录仅存储在本地设备</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="privacy-section">
          <h2 class="section-title">问题反馈与联系</h2>
          <div class="section-content">
            <p>遇到问题或者反馈问题，请通过以下方式联系：</p>
            <div class="contact-info">
              <div class="contact-item">
                <div class="contact-icon">📧</div>
                <div class="contact-details">
                  <h4>邮箱联系</h4>
                  <p>zhangjh_initial@126.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer class="privacy-footer">
        <div class="footer-links">
          <a href="/index.html" class="footer-link">返回首页</a>
          <a href="/guide.html" class="footer-link">使用说明</a>
        </div>
        <p class="footer-text">最后更新：2024年7月</p>
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
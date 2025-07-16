<script setup>

</script>

<template>
  <div class="guide-container">
    <div class="container">
      <header class="guide-header">
        <h1 class="guide-title">慧搜使用说明</h1>
        <p class="guide-subtitle">AI文图搜索应用完整指南</p>
      </header>

      <div class="guide-content">
        <section class="guide-section">
          <div class="section-number">01</div>
          <h2 class="section-title">慧搜是什么，它有什么用？</h2>
          <div class="section-content">
            <p>你一定遇到过这样的时候：突然想起来曾经有一张很有趣的图，它就躺在你的手机相册里，但是奈何相册图片实在太多翻不过来。</p>
            <p>使用慧搜，你可以使用任何你能想到的关于图片的描述信息来寻找你想要的某张图片。如"红色的花"、"可爱的小朋友"、"两个人的合照"、"傍晚的夕阳"、"海边看日出"、"表情包"、"结婚啦"……</p>
            <p class="highlight">而这一切，都仅仅发生在你的设备本地，它不需要联网，你也不用担心隐私泄露，你的相册、你的搜索，只有你知道。</p>
          </div>
        </section>

        <section class="guide-section">
          <div class="section-number">02</div>
          <h2 class="section-title">怎样使用慧搜？</h2>
          <div class="section-content">
            <p>使用慧搜主要分为两步：<strong>构建索引</strong> & <strong>检索图片</strong>。</p>
            <p>首次运行时，APP需要为你的图片建立索引。视手机性能和图片总数而定，可能需要一段时间。</p>
            <p>不过你不用一直等待它完成，构建任务可以后台运行。</p>
            <p>构建任务完成后，你可以使用任何你想到的描述信息来检索你的图片库。当有新的图片加入时，在下次打开APP时，你可以通过增量构建将它们纳入你的索引库。</p>
          </div>
        </section>

        <section class="guide-section">
          <div class="section-number">03</div>
          <h2 class="section-title">隐私安全问题</h2>
          <div class="section-content">
            <p><strong>它为什么要请求我的相册？我的照片隐私会不会泄露？</strong></p>
            <p>慧搜需要请求必要的应用权限，比如相册的读写权限，读取相册构建本地索引是它得以运作的必要前提，应用也有部分的图片管理功能，如在检索到相关图片时，你可以进行删除，所以需要请求写权限。</p>
            <p class="highlight">然而你完全不需要担心隐私问题，慧搜通过加载人工智能模型，完完全全运行在本地不需要联网，这也是为什么安装文件有几百兆的原因。</p>
            <p>你甚至可以在关闭网络权限的时候运行它，这样它就绝无可能将你的图片上传到任何其他地方。因此请相信使用慧搜是完全不需要担心隐私问题。</p>
          </div>
        </section>

        <section class="guide-section">
          <div class="section-number">04</div>
          <h2 class="section-title">设备要求</h2>
          <div class="section-content">
            <p>由于需要运行人工智能模型，慧搜对手机性能有一定的要求。</p>
            <p><strong>最低要求：</strong>Android 10.0 及以上版本</p>
            <p><strong>推荐配置：</strong>4GB RAM 以上，确保更流畅的使用体验</p>
          </div>
        </section>

        <section class="guide-section">
          <div class="section-number">05</div>
          <h2 class="section-title">反馈与帮助</h2>
          <div class="section-content">
            <p>遇到问题或者反馈问题，甚至仅仅想沟通交流，请通过以下方式联系：</p>
            <div class="contact-info">
              <p><strong>邮箱：</strong>zhangjh_initial@126.com</p>
            </div>
          </div>
        </section>
      </div>

      <footer class="guide-footer">
        <div class="footer-links">
          <a href="/index.html" class="footer-link">返回首页</a>
          <a href="/privacy.html" class="footer-link">隐私声明</a>
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
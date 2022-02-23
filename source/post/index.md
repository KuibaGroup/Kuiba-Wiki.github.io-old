---
title: 发表文章
toc: false
comments: false
---

{% tabs Github %}
<!-- tab Github@fab fa-github -->

{% note success %}

#### 支持自动部署
基于 [Github Actions](https://github.com/Kuiba-Wiki/Kuiba-Wiki.github.io/actions) 服务实现。

{% endnote %}

{% button https://github.com/Kuiba-Wiki/Kuiba-Wiki.github.io/new/master/source/_posts, 在 Github 上发帖, fab fa-github fa-fw post_github %}

<!-- endtab -->
<!-- tab Gitee@fab fa-git fa-fw -->
{% note warning %}

#### 不支持自动部署
等待[仓库镜像管理](https://gitee.com/help/articles/4336)服务公测。

{% endnote %}

{% button https://gitee.com/kuiba-wiki/kuiba-wiki/new/master/source/_posts, 在 Gitee 上发帖, fab fa-git fa-fw post_gitee %}


<!-- endtab -->
{% endtabs %}

<script>
    var path;
    try {
        path = document.URL.split('://')[1].split(document.domain)[1].split('/post/?')[1];
        if(path != undefined) {
            window.onload = function() {
                document.getElementsByClassName('post-title')[0].innerHTML = '编辑文章';
                document.getElementsByClassName('menu-item-active')[0].className = '';
                var github_btn = document.getElementsByClassName('post_github')[0].parentElement;
                var gitee_btn = document.getElementsByClassName('post_gitee')[0].parentElement;
                github_btn.innerHTML = github_btn.innerHTML.replace("发帖", "编辑");
                github_btn.href = 'https://github.com/Kuiba-Wiki/Kuiba-Wiki.github.io/edit/master/source/' + path;
                gitee_btn.innerHTML = gitee_btn.innerHTML.replace("发帖", "编辑");
                gitee_btn.href = 'https://gitee.com/kuiba-wiki/kuiba-wiki/edit/master/source/' + path;
                
            }
        }
    } catch(e) {}
</script>
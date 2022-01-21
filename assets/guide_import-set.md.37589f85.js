import{_ as s,c as a,o as n,d as e}from"./app.a79812d4.js";const _=`{"title":"You can use ImportSet's","description":"","frontmatter":{},"headers":[{"level":2,"title":"You can use ImportSet's","slug":"you-can-use-importset-s"}],"relativePath":"guide/import-set.md","lastUpdated":1642808177167}`,t={},o=e(`<h2 id="you-can-use-importset-s" tabindex="-1">You can use ImportSet&#39;s <a class="header-anchor" href="#you-can-use-importset-s" aria-hidden="true">#</a></h2><p>Used to send data to serviceNow like an feed process. Allows multiples import set be exported in a single request.</p><p>See <a href="https://docs.servicenow.com/bundle/orlando-it-service-management/page/product/service-catalog-management/task/t_DefineACatalogItem.html" target="_blank" rel="noopener noreferrer">Service Now Docs</a> to learn more</p><ul><li>You must first create an application in studio inside ServiceNow and then: <ul><li>Create a catalogItem</li><li>create a flow</li></ul></li></ul><div class="language-csharp"><pre><code><span class="token class-name"><span class="token keyword">var</span></span> requestCatalog <span class="token operator">=</span> serviceNow<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">UsingCatalog</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Request<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Guid</span><span class="token punctuation">(</span><span class="token string">&quot;catalogItemIdHere&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name"><span class="token keyword">var</span></span> request <span class="token operator">=</span> <span class="token keyword">await</span> requestCatalog<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token keyword">new</span><span class="token punctuation">{</span>
    varNameHereString <span class="token operator">=</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
    varNameHereNumber <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span>
    varNameHereReference <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Guid</span><span class="token punctuation">(</span>sys_id<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">;</span>
</code></pre></div>`,5),p=[o];function c(r,l,i,u,k,d){return n(),a("div",null,p)}var g=s(t,[["render",c]]);export{_ as __pageData,g as default};

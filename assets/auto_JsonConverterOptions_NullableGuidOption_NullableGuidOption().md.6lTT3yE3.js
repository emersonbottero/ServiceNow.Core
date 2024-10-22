import{_ as i,c as s,o as t,U as e}from"./chunks/framework.WPXu0_gW.js";const k=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"auto/JsonConverterOptions_NullableGuidOption_NullableGuidOption().md","filePath":"auto/JsonConverterOptions_NullableGuidOption_NullableGuidOption().md"}'),o={name:"auto/JsonConverterOptions_NullableGuidOption_NullableGuidOption().md"},n=e(`<h4 id="servicenow-core" tabindex="-1"><a href="./" title="index">ServiceNow.Core</a> <a class="header-anchor" href="#servicenow-core" aria-label="Permalink to &quot;[ServiceNow.Core](index.md &#39;index&#39;)&quot;">​</a></h4><h3 id="snow-core-utils-jsonconverteroptions-nullableguidoption" tabindex="-1"><a href="./SNow_Core_Utils.html" title="SNow.Core.Utils">SNow.Core.Utils</a>.<a href="./JsonConverterOptions.html" title="SNow.Core.Utils.JsonConverterOptions">JsonConverterOptions</a>.<a href="./JsonConverterOptions_NullableGuidOption.html" title="SNow.Core.Utils.JsonConverterOptions.NullableGuidOption">NullableGuidOption</a> <a class="header-anchor" href="#snow-core-utils-jsonconverteroptions-nullableguidoption" aria-label="Permalink to &quot;[SNow.Core.Utils](SNow_Core_Utils.md &#39;SNow.Core.Utils&#39;).[JsonConverterOptions](JsonConverterOptions.md &#39;SNow.Core.Utils.JsonConverterOptions&#39;).[NullableGuidOption](JsonConverterOptions_NullableGuidOption.md &#39;SNow.Core.Utils.JsonConverterOptions.NullableGuidOption&#39;)&quot;">​</a></h3><h2 id="jsonconverteroptions-nullableguidoption-nullableguidoption-constructor" tabindex="-1">JsonConverterOptions.NullableGuidOption.NullableGuidOption() Constructor <a class="header-anchor" href="#jsonconverteroptions-nullableguidoption-nullableguidoption-constructor" aria-label="Permalink to &quot;JsonConverterOptions.NullableGuidOption.NullableGuidOption() Constructor&quot;">​</a></h2><p>Handle ServiceNow Guid serialization, if it is an object like</p><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">business_service</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   &quot;link&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;https://dev.service-now.com/api/now/table/cmdb_ci_service/ce02b8461b88f01030cb635bbc4bcb6d&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   &quot;value&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;ce02b8461b88f01030cb635bbc4bcb6d&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span></code></pre></div><p>it will read until it reaches &quot;ce02b8461b88f01030cb635bbc4bcb6d&quot; if it is an string it will read the value</p><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> NullableGuidOption</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div>`,7),a=[n];function l(r,p,u,d,h,c){return t(),s("div",null,a)}const _=i(o,[["render",l]]);export{k as __pageData,_ as default};
import{_ as t,y as n,x as e,W as s}from"./plugin-vue_export-helper.7cf9b872.js";const k='{"title":"ServiceNow.Core","description":"","frontmatter":{},"headers":[{"level":3,"title":"SNow.Core.Extensions.HttpClientExtensions","slug":"snow-core-extensions-httpclientextensions"},{"level":2,"title":"HttpClientExtensions.GetActionResultAsync<T>(HttpClient, string, Func<Task<string>>, ILogger) Method","slug":"httpclientextensions-getactionresultasync-t-httpclient-string-func-task-string-ilogger-method"}],"relativePath":"auto/HttpClientExtensions_GetActionResultAsync_T_(HttpClient_string_Func_Task_string___ILogger).md","lastUpdated":1651619825068}',a={},o=s('<h4 id="servicenow-core" tabindex="-1"><a href="./" title="index">ServiceNow.Core</a> <a class="header-anchor" href="#servicenow-core" aria-hidden="true">#</a></h4><h3 id="snow-core-extensions-httpclientextensions" tabindex="-1"><a href="./SNow_Core_Extensions.html" title="SNow.Core.Extensions">SNow.Core.Extensions</a>.<a href="./HttpClientExtensions.html" title="SNow.Core.Extensions.HttpClientExtensions">HttpClientExtensions</a> <a class="header-anchor" href="#snow-core-extensions-httpclientextensions" aria-hidden="true">#</a></h3><h2 id="httpclientextensions-getactionresultasync-t-httpclient-string-func-task-string-ilogger-method" tabindex="-1">HttpClientExtensions.GetActionResultAsync&lt;T&gt;(HttpClient, string, Func&lt;Task&lt;string&gt;&gt;, ILogger) Method <a class="header-anchor" href="#httpclientextensions-getactionresultasync-t-httpclient-string-func-task-string-ilogger-method" aria-hidden="true">#</a></h2><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name">System<span class="token punctuation">.</span>Threading<span class="token punctuation">.</span>Tasks<span class="token punctuation">.</span>Task<span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span> <span class="token generic-method"><span class="token function">GetActionResultAsync</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token class-name">System<span class="token punctuation">.</span>Net<span class="token punctuation">.</span>Http<span class="token punctuation">.</span>HttpClient</span> client<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">string</span></span> requestUri<span class="token punctuation">,</span> <span class="token class-name">System<span class="token punctuation">.</span>Func<span class="token punctuation">&lt;</span>System<span class="token punctuation">.</span>Threading<span class="token punctuation">.</span>Tasks<span class="token punctuation">.</span>Task<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> authenticate<span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token class-name">Microsoft<span class="token punctuation">.</span>Extensions<span class="token punctuation">.</span>Logging<span class="token punctuation">.</span>ILogger</span> logger<span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h4 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-hidden="true">#</a></h4><p><a name="SNow_Core_Extensions_HttpClientExtensions_GetActionResultAsync_T_(System_Net_Http_HttpClient_string_System_Func_System_Threading_Tasks_Task_string___Microsoft_Extensions_Logging_ILogger)_T"></a><code>T</code></p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h4><p><a name="SNow_Core_Extensions_HttpClientExtensions_GetActionResultAsync_T_(System_Net_Http_HttpClient_string_System_Func_System_Threading_Tasks_Task_string___Microsoft_Extensions_Logging_ILogger)_client"></a><code>client</code> <a href="https://docs.microsoft.com/en-us/dotnet/api/System.Net.Http.HttpClient" title="System.Net.Http.HttpClient" target="_blank" rel="noopener noreferrer">System.Net.Http.HttpClient</a></p><p><a name="SNow_Core_Extensions_HttpClientExtensions_GetActionResultAsync_T_(System_Net_Http_HttpClient_string_System_Func_System_Threading_Tasks_Task_string___Microsoft_Extensions_Logging_ILogger)_requestUri"></a><code>requestUri</code> <a href="https://docs.microsoft.com/en-us/dotnet/api/System.String" title="System.String" target="_blank" rel="noopener noreferrer">System.String</a></p><p><a name="SNow_Core_Extensions_HttpClientExtensions_GetActionResultAsync_T_(System_Net_Http_HttpClient_string_System_Func_System_Threading_Tasks_Task_string___Microsoft_Extensions_Logging_ILogger)_authenticate"></a><code>authenticate</code> <a href="https://docs.microsoft.com/en-us/dotnet/api/System.Func-1" title="System.Func`1" target="_blank" rel="noopener noreferrer">System.Func&lt;</a><a href="https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1" title="System.Threading.Tasks.Task`1" target="_blank" rel="noopener noreferrer">System.Threading.Tasks.Task&lt;</a><a href="https://docs.microsoft.com/en-us/dotnet/api/System.String" title="System.String" target="_blank" rel="noopener noreferrer">System.String</a><a href="https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1" title="System.Threading.Tasks.Task`1" target="_blank" rel="noopener noreferrer">&gt;</a><a href="https://docs.microsoft.com/en-us/dotnet/api/System.Func-1" title="System.Func`1" target="_blank" rel="noopener noreferrer">&gt;</a></p><p><a name="SNow_Core_Extensions_HttpClientExtensions_GetActionResultAsync_T_(System_Net_Http_HttpClient_string_System_Func_System_Threading_Tasks_Task_string___Microsoft_Extensions_Logging_ILogger)_logger"></a><code>logger</code> <a href="https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.ILogger" title="Microsoft.Extensions.Logging.ILogger" target="_blank" rel="noopener noreferrer">Microsoft.Extensions.Logging.ILogger</a></p><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h4><p><a href="https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1" title="System.Threading.Tasks.Task`1" target="_blank" rel="noopener noreferrer">System.Threading.Tasks.Task&lt;</a><a href="./HttpClientExtensions_GetActionResultAsync_T_(HttpClient_string_Func_Task_string___ILogger).html#SNow_Core_Extensions_HttpClientExtensions_GetActionResultAsync_T_(System_Net_Http_HttpClient_string_System_Func_System_Threading_Tasks_Task_string___Microsoft_Extensions_Logging_ILogger)_T" title="SNow.Core.Extensions.HttpClientExtensions.GetActionResultAsync&lt;T&gt;(System.Net.Http.HttpClient, string, System.Func&lt;System.Threading.Tasks.Task&lt;string&gt;&gt;, Microsoft.Extensions.Logging.ILogger).T">T</a><a href="https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1" title="System.Threading.Tasks.Task`1" target="_blank" rel="noopener noreferrer">&gt;</a></p>',13),i=[o];function r(c,p,_,l,g,u){return e(),n("div",null,i)}var h=t(a,[["render",r]]);export{k as __pageData,h as default};

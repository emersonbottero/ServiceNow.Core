import{_ as e,c as t,o as n,d as s}from"./app.ac5b6d71.js";const m='{"title":"ServiceNow.Core","description":"","frontmatter":{},"headers":[{"level":3,"title":"SNow.Core.Table<T>","slug":"snow-core-table-t"},{"level":2,"title":"Table<T>.WithQuery(Expression<Func<T,string>>) Method","slug":"table-t-withquery-expression-func-t-string-method"}],"relativePath":"auto/Table_T__WithQuery(Expression_Func_T_string__).md","lastUpdated":1649560581645}',a={},r=s('<h4 id="servicenow-core" tabindex="-1"><a href="./" title="index">ServiceNow.Core</a> <a class="header-anchor" href="#servicenow-core" aria-hidden="true">#</a></h4><h3 id="snow-core-table-t" tabindex="-1"><a href="./SNow_Core.html" title="SNow.Core">SNow.Core</a>.<a href="./Table_T_.html" title="SNow.Core.Table&lt;T&gt;">Table&lt;T&gt;</a> <a class="header-anchor" href="#snow-core-table-t" aria-hidden="true">#</a></h3><h2 id="table-t-withquery-expression-func-t-string-method" tabindex="-1">Table&lt;T&gt;.WithQuery(Expression&lt;Func&lt;T,string&gt;&gt;) Method <a class="header-anchor" href="#table-t-withquery-expression-func-t-string-method" aria-hidden="true">#</a></h2><p>The query must have only those operators and, or, like, =, !=, startsWith, endsWith see <a href="https://docs.servicenow.com/bundle/rome-application-development/page/integrate/inbound-rest/concept/c_RESTAPI.html" title="https://docs.servicenow.com/bundle/rome-application-development/page/integrate/inbound-rest/concept/c_RESTAPI.html" target="_blank" rel="noopener noreferrer">SN Rest Operators</a></p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token return-type class-name">SNow<span class="token punctuation">.</span>Core<span class="token punctuation">.</span>ITable<span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span> <span class="token function">WithQuery</span><span class="token punctuation">(</span><span class="token class-name">System<span class="token punctuation">.</span>Linq<span class="token punctuation">.</span>Expressions<span class="token punctuation">.</span>Expression<span class="token punctuation">&lt;</span>System<span class="token punctuation">.</span>Func<span class="token punctuation">&lt;</span>T<span class="token punctuation">,</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> expression<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h4><p><a name="SNow_Core_Table_T__WithQuery(System_Linq_Expressions_Expression_System_Func_T_string__)_expression"></a><code>expression</code> <a href="https://docs.microsoft.com/en-us/dotnet/api/System.Linq.Expressions.Expression-1" title="System.Linq.Expressions.Expression`1" target="_blank" rel="noopener noreferrer">System.Linq.Expressions.Expression&lt;</a><a href="https://docs.microsoft.com/en-us/dotnet/api/System.Func-2" title="System.Func`2" target="_blank" rel="noopener noreferrer">System.Func&lt;</a><a href="./Table_T_.html#SNow_Core_Table_T__T" title="SNow.Core.Table&lt;T&gt;.T">T</a><a href="https://docs.microsoft.com/en-us/dotnet/api/System.Func-2" title="System.Func`2" target="_blank" rel="noopener noreferrer">,</a><a href="https://docs.microsoft.com/en-us/dotnet/api/System.String" title="System.String" target="_blank" rel="noopener noreferrer">System.String</a><a href="https://docs.microsoft.com/en-us/dotnet/api/System.Func-2" title="System.Func`2" target="_blank" rel="noopener noreferrer">&gt;</a><a href="https://docs.microsoft.com/en-us/dotnet/api/System.Linq.Expressions.Expression-1" title="System.Linq.Expressions.Expression`1" target="_blank" rel="noopener noreferrer">&gt;</a><br> String that has access to the table model ex.: x =&gt; $&quot;{<a href="http://x.Name" target="_blank" rel="noopener noreferrer">x.Name</a>} like Something and {x.Age} = 10&quot;</p><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h4><p><a href="./ITable_T_.html" title="SNow.Core.ITable&lt;T&gt;">SNow.Core.ITable&lt;</a><a href="./Table_T_.html#SNow_Core_Table_T__T" title="SNow.Core.Table&lt;T&gt;.T">T</a><a href="./ITable_T_.html" title="SNow.Core.ITable&lt;T&gt;">&gt;</a></p><p>Implements <a href="./ITable_T__WithQuery(Expression_Func_T_string__).html" title="SNow.Core.ITable&lt;T&gt;.WithQuery(System.Linq.Expressions.Expression&lt;System.Func&lt;T,string&gt;&gt;)">WithQuery(Expression &gt;)</a></p>',10),o=[r];function i(p,l,c,_,h,u){return n(),t("div",null,o)}var T=e(a,[["render",i]]);export{m as __pageData,T as default};
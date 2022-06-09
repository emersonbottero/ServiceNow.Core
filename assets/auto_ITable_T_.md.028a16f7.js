import{_ as t,c as e,o as l,d as a}from"./app.9ba3efac.js";const g='{"title":"ServiceNow.Core","description":"","frontmatter":{},"headers":[{"level":3,"title":"SNow.Core","slug":"snow-core"},{"level":2,"title":"ITable<T> Interface","slug":"itable-t-interface"}],"relativePath":"auto/ITable_T_.md"}',s={name:"auto/ITable_T_.md"},r=a(`<h4 id="servicenow-core" tabindex="-1"><a href="./" title="index">ServiceNow.Core</a> <a class="header-anchor" href="#servicenow-core" aria-hidden="true">#</a></h4><h3 id="snow-core" tabindex="-1"><a href="./SNow_Core.html" title="SNow.Core">SNow.Core</a> <a class="header-anchor" href="#snow-core" aria-hidden="true">#</a></h3><h2 id="itable-t-interface" tabindex="-1">ITable&lt;T&gt; Interface <a class="header-anchor" href="#itable-t-interface" aria-hidden="true">#</a></h2><p>Handle ServiceNow tables API</p><div class="language-csharp"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ITable</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">where</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SNow</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Core</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Models</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">ServiceNowBaseModel</span></span>
<span class="line"></span></code></pre></div><h4 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-hidden="true">#</a></h4><p><a name="SNow_Core_ITable_T__T"></a><code>T</code></p><p>Derived<br> \u21B3 <a href="./Table_T_.html" title="SNow.Core.Table&lt;T&gt;">Table&lt;T&gt;</a></p><table><thead><tr><th style="text-align:left;">Properties</th><th style="text-align:left;"></th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./ITable_T__RequestUrl.html" title="SNow.Core.ITable&lt;T&gt;.RequestUrl">RequestUrl</a></td><td style="text-align:left;"></td></tr></tbody></table><table><thead><tr><th style="text-align:left;">Methods</th><th style="text-align:left;"></th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./ITable_T__AllToListAsync().html" title="SNow.Core.ITable&lt;T&gt;.AllToListAsync()">AllToListAsync()</a></td><td style="text-align:left;">Makes HTTP requests to get all data (from all pages)</td></tr><tr><td style="text-align:left;"><a href="./ITable_T__Create(object).html" title="SNow.Core.ITable&lt;T&gt;.Create(object)">Create(object)</a></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><a href="./ITable_T__Delete(Guid).html" title="SNow.Core.ITable&lt;T&gt;.Delete(System.Guid)">Delete(Guid)</a></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><a href="./ITable_T__GetByIdAsync(Guid).html" title="SNow.Core.ITable&lt;T&gt;.GetByIdAsync(System.Guid)">GetByIdAsync(Guid)</a></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><a href="./ITable_T__Limit(int).html" title="SNow.Core.ITable&lt;T&gt;.Limit(int)">Limit(int)</a></td><td style="text-align:left;">The maximum number of results returned per page (default: 10,000)</td></tr><tr><td style="text-align:left;"><a href="./ITable_T__OrderBy(Expression_Func_T_object__).html" title="SNow.Core.ITable&lt;T&gt;.OrderBy(System.Linq.Expressions.Expression&lt;System.Func&lt;T,object&gt;&gt;)">OrderBy(Expression&lt;Func&lt;T,object&gt;&gt;)</a></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><a href="./ITable_T__OrderByDesc(Expression_Func_T_object__).html" title="SNow.Core.ITable&lt;T&gt;.OrderByDesc(System.Linq.Expressions.Expression&lt;System.Func&lt;T,object&gt;&gt;)">OrderByDesc(Expression&lt;Func&lt;T,object&gt;&gt;)</a></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><a href="./ITable_T__Select(Expression_Func_T_object____).html" title="SNow.Core.ITable&lt;T&gt;.Select(System.Linq.Expressions.Expression&lt;System.Func&lt;T,object&gt;&gt;[])">Select(Expression&lt;Func&lt;T,object&gt;&gt;[])</a></td><td style="text-align:left;">List of properties to return, impacts the size of the response</td></tr><tr><td style="text-align:left;"><a href="./ITable_T__SetHeaders(List_KeyValuePair_string_string__).html" title="SNow.Core.ITable&lt;T&gt;.SetHeaders(System.Collections.Generic.List&lt;System.Collections.Generic.KeyValuePair&lt;string,string&gt;&gt;)">SetHeaders(List&lt;KeyValuePair&lt;string,string&gt;&gt;)</a></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><a href="./ITable_T__ToListAsync(Nullable_int_).html" title="SNow.Core.ITable&lt;T&gt;.ToListAsync(System.Nullable&lt;int&gt;)">ToListAsync(Nullable&lt;int&gt;)</a></td><td style="text-align:left;">Makes the actual HTTP Request</td></tr><tr><td style="text-align:left;"><a href="./ITable_T__Update(Nullable_Guid__object_bool).html" title="SNow.Core.ITable&lt;T&gt;.Update(System.Nullable&lt;System.Guid&gt;, object, bool)">Update(Nullable&lt;Guid&gt;, object, bool)</a></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><a href="./ITable_T__Where(Expression_Func_T_bool__).html" title="SNow.Core.ITable&lt;T&gt;.Where(System.Linq.Expressions.Expression&lt;System.Func&lt;T,bool&gt;&gt;)">Where(Expression&lt;Func&lt;T,bool&gt;&gt;)</a></td><td style="text-align:left;">Set query parameters to the API request using Where clause.<br> Don&#39;t use it together with &quot;WithQuery&quot;</td></tr><tr><td style="text-align:left;"><a href="./ITable_T__WithQuery(Expression_Func_T_string__).html" title="SNow.Core.ITable&lt;T&gt;.WithQuery(System.Linq.Expressions.Expression&lt;System.Func&lt;T,string&gt;&gt;)">WithQuery(Expression&lt;Func&lt;T,string&gt;&gt;)</a></td><td style="text-align:left;">The query must have only those operators and, or, like, =, !=, startsWith, endsWith see <a href="https://docs.servicenow.com/bundle/rome-application-development/page/integrate/inbound-rest/concept/c_RESTAPI.html" title="https://docs.servicenow.com/bundle/rome-application-development/page/integrate/inbound-rest/concept/c_RESTAPI.html" target="_blank" rel="noopener noreferrer">SN Rest Operators</a></td></tr></tbody></table>`,10),o=[r];function n(i,d,c,p,_,T){return l(),e("div",null,o)}var h=t(s,[["render",n]]);export{g as __pageData,h as default};

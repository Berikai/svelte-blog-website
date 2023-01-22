<script lang="ts">
    import "../app.css";
    import Header from "./lib/layout/header.svelte";
    import Footer from "./lib/layout/footer.svelte";
	import Head from "./lib/essentials/head.svelte";
</script>

<Head/>
<div class="bg-white">
    <Header/>
    <div class="container mx-auto px-6 py-6">
        <slot/>
    </div>
    <Footer/>
</div>
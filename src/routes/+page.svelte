<script>
    import bumblebee1 from '$lib/images/bumblebee1.png'
    import bumblebee2 from '$lib/images/bumblebee2.png'
    import bumblebee3 from '$lib/images/bumblebee3.png'
    import bumblebee4 from '$lib/images/bumblebee4.png'
    import bumblebee5 from '$lib/images/bumblebee5.png'

    let current = 0;

    let keyboardReaction = (e) => {
        switch (e.key) {
            case 'ArrowRight':
                current = Math.min(current + 1, 5);
                break;
            case 'ArrowLeft':
                current = Math.max(current - 1, 0);
                break;
        }
    }
</script>
<svelte:window on:keydown={keyboardReaction}/>
<div class="root">
    <a class="control"
       on:click|preventDefault={() => current--}
       style:visibility={current === 0 ? 'hidden': ''}
       href="#"
    >
        Назад
    </a>
    <ul class="cards" on:click|preventDefault={() => current = Math.min(current + 1, 5)}>
        <li class="card card1" class:current={current === 0}>
            <img src={bumblebee1} alt=""/>
            <h2>Шмели</h2>
            <h3>Крутые</h3>
        </li>
        <li class="card card2" class:current={current === 1}>
            <img src={bumblebee2} alt=""/>
            <h2>Шмели</h2>
            <h3>— работящие</h3>
            <p>Они самые эффективные опылители. пчёлы нервно курят.</p>
            <p>В теплицах и оранжереях иногда разводят шмелиные семьи, чтобы они помогали опылять растения.</p>
        </li>
        <li class="card card3" class:current={current === 2}>
            <img src={bumblebee3} alt=""/>
            <h2>Шмели</h2>
            <h3>— выносливые</h3>
            <p>Они живут даже в тундре и в арктическом климате, продолжая и там опылять местные растения, едва ли не
                единственные.</p>
            <p>Не замерзают они, потому что греются физкультурой, непрерывно сокращая мышцы.</p>
        </li>
        <li class="card card4" class:current={current === 3}>
            <img src={bumblebee4} alt=""/>
            <h2>Шмели</h2>
            <h3>— упорные</h3>
            <p>Они не производят мёд. Им некогда. Они трудятся</p>
            <p>На задних лапах у них есть специальные карманы, в которых они переносят пыльцу и запасают её просто
                складывая в соты.</p>
        </li>
        <li class="card card5" class:current={current === 4}><img src={bumblebee5} alt=""/>
            <h2>Шмели</h2>
            <h3>— галантные</h3>
            <p>Они не жалят, если их не разозлить. Они обнажают своё жало только для самообороны и защиты гнезда.</p>
            <p>Шмели не умирают после укуса, они просто хорошо воспитаны.</p>
        </li>
        <li class="card card6" class:current={current === 5}>
            <img src={bumblebee1} alt=""/>
            <h2>Шмели</h2>
            <h3>тоже иногда выгорают</h3>
            <p>Если на дороге лежит шмель — Он не умер, он просто устал. Отнеси его в сторону, чтобы никто не
                наступил.</p>
            <p>Можно дать ему воду с сахаром — так он быстрее восстановит силы и отправится по делам.</p>
        </li>
    </ul>
    <a class="control"
       on:click|preventDefault={() => current++}
       style:visibility={current === 5 ? 'hidden': ''}
       href="#"
    >
        Дальше
    </a>
</div>

<style>
    .root {
        display: grid;
        grid-template-columns: min-content 1fr min-content;
        justify-content: stretch;
        align-items: end;
        height: 100%;
        gap: 20px;
    }

    .control {
        font-size: 1.5rem;
    }

    .cards {
        flex-grow: 1;
        display: flex;
        margin: 0;
        /*flex-wrap: wrap;*/
        /*gap: 30px;*/
        justify-content: center;
        /*align-items: center;*/
    }

    .card {
        background-color: oklch(83.8% 0.08 120.195);
        list-style: none;
        border: solid 1px rgba(218, 139, 4, 0);
        border-radius: 20px 20px 0 0;
        overflow: visible;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgba(218, 139, 4, 0) 0px 0px 0px 3px;
        display: grid;
        flex-direction: column;
        padding: 40px 40px 0;
        grid-template-columns: minmax(min-content, 600px);
        align-items: center;
        justify-content: center;
        height: max-content;
    }

    .card > * {
        max-width: 600px;

    }
    .card > p {
        margin-bottom: 0;
    }
    .card:not(.current) {
        display: none;
    }

    .card > img {

        margin-top: -150px;
        margin-bottom: -120px;
        margin-right: -150px;
        width: 400px;
        justify-self: end;
    }

    .card.card1 {
        background-color: oklch(85% 0.08 60);
    }

    .card.card2 {
        background-color: oklch(85% 0.08 120);
    }

    .card.card3 {
        background-color: oklch(85% 0.08 180);
    }

    .card.card4 {
        background-color: oklch(85% 0.08 240);
    }

    .card.card5 {
        background-color: oklch(85% 0.08 300);
    }

    .card.card6 {
        background-color: oklch(85% 0.08 360);
    }

    .card1 h2 {
        font-size: 3rem;
    }
    .card1 h3 {
        font-size: 3rem;
    }
</style>

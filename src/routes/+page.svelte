<script>
    import bumblebee1 from '$lib/images/bumblebee1.png'
    import bumblebee2 from '$lib/images/bumblebee2.png'
    import bumblebee3 from '$lib/images/bumblebee3.png'
    import bumblebee4 from '$lib/images/bumblebee4.png'
    import bumblebee5 from '$lib/images/bumblebee5.png'
</script>

<ul class="cards">
    <li class="card card1"><img src={bumblebee1} alt=""/>
        <h2>Шмели</h2>
        <h3>Крутые</h3>
    </li>
    <li class="card card2"><img src={bumblebee2} alt=""/>
        <h2>Шмели</h2>
        <h3>— работящие</h3>
        <p>
            Они самые эффективные опылители. пчёлы нервно курят.
        </p>
        <p>
            В теплицах и оранжереях иногда разводят шмелиные семьи, чтобы они помогали опылять растения.
        </p>
    </li>
    <li class="card card3"><img src={bumblebee3} alt=""/>
        <h2>Шмели</h2>
        <h3>— выносливые</h3>
        <p>
            Они живут даже в тундре и в арктическом климате, продолжая и там опылять местные растения, едва ли не
            единственные.
        </p>
        <p>Не замерзают они, потому что греются физкультурой, непрерывно сокращая мышцы.</p>
    </li>
    <li class="card card4"><img src={bumblebee4} alt=""/>
        <h2>Шмели</h2>
        <h3>— упорные</h3>
        <p>Они не производят мёд. Им некогда. Они трудятся</p>
        <p>На задних лапах у них есть специальные карманы, в которых они переносят пыльцу и запасают её просто складывая в соты.</p>
    </li>
    <li class="card card5"><img src={bumblebee5} alt=""/>
        <h2>Шмели</h2>
        <h3>— галантные</h3>
        <p>Они не жалят, если их не разозлить. Они обнажают своё жало только для самообороны и защиты гнезда.</p>
        <p>Шмели не умирают после укуса, они просто хорошо воспитаны.</p>
    </li>
    <li class="card card6"><img src={bumblebee1} alt=""/>
        <h2>Шмели</h2>
        <h3>тоже иногда выгорают</h3>
        <p>Если на дороге лежит шмель — Он не умер, он просто устал. Отнеси его в сторону, чтобы никто не наступил.</p>
        <p>Можно дать ему воду с сахаром — так он быстрее восстановит силы и отправится по делам.</p>
    </li>
</ul>

<style>
    .cards {
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
    }

    .card {
        list-style: none;
        flex: 1 0 275px;
        border: solid 1px rgba(218, 139, 4, 0);
        height: 467px;
        overflow: hidden;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgba(218, 139, 4, 0) 0px 0px 0px 3px;
    }

    .card > img {
        width: 100%;
    }
</style>

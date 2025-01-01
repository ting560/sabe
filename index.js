if (Hls.isSupported()) {
    const video = document.getElementById('video');
    const hls = new Hls();
    const channelSelect = document.getElementById('channel-select');

    // Lista de canais com novos links
    const channels = [
        { name: "Globo", url: "https://iptv.vivatele.com:443/live/viva_padrao/viva2384/1.m3u8" },
        { name: "SBT", url: "https://super-cdn.link/sbt/index.m3u8" },
        { name: "Record TV", url: "https://super-cdn.link/record/index.m3u8" },
        { name: "Band", url: "https://super-cdn.link/band/index.m3u8" },
        { name: "RedeTV!", url: "https://super-cdn.link/redetv/index.m3u8" },
        { name: "GloboNews", url: "https://super-cdn.link/globonews/index.m3u8" },
        { name: "Multishow", url: "https://super-cdn.link/multishow/index.m3u8" },
        { name: "GNT", url: "https://super-cdn.link/gnt/index.m3u8" },
        { name: "Viva", url: "https://super-cdn.link/viva/index.m3u8" },
        { name: "SporTV", url: "https://super-cdn.link/sportv/index.m3u8" }, // Vírgula adicionada aqui
        { name: "A&E Brasil", url: "https://cdn-3.nxplay.com.br/AeE_BRASIL_TK/tracks-v2a1/mono.m3u8" },
        { name: "Discovery ID", url: "https://cdn-3.nxplay.com.br/DISCOVERY_ID_NX/tracks-v2a1/mono.m3u8" },
        { name: "History Channel 2", url: "https://cdn-3.nxplay.com.br/HISTORY_2_TK/tracks-v2a1/mono.m3u8" },
        { name: "Discovery World", url: "https://cdn-3.nxplay.com.br/DISCOVERY_WORLD_NX/tracks-v2a1/mono.m3u8" },
        { name: "Discovery Science", url: "https://cdn-3.nxplay.com.br/DISCOVERY_SCIENCE_NX/index.m3u8" },
        { name: "ESPN 4", url: "https://cdn-3.nxplay.com.br/ESPN_4/tracks-v2a1/mono.m3u8" },
        { name: "ESPN 4 (Super CDN)", url: "https://super-cdn.link/espn4/index.m3u8" },
        { name: "ESPN 5", url: "https://super-cdn.link/espn5/index.m3u8" },
        { name: "ESPN 6", url: "https://super-cdn.link/espn6/index.m3u8" },
        { name: "ESPN Extra", url: "https://cdn-3.nxplay.com.br/ESPN_EXTRA/tracks-v2a1/mono.m3u8" },
        { name: "ESPN 2", url: "https://super-cdn.link/espn2/index.m3u8" },
        { name: "Ottera TV", url: "https://stream.ads.ottera.tv/playlist.m3u8?network_id=7333" },
        { name: "Sony One Emoções", url: "https://spt-sonyoneemocoes-1-br.samsung.wurl.tv/playlist.m3u8" },
        { name: "Premiere 7", url: "https://super-cdn.link/premiere7/index.m3u8" },
        { name: "Premiere 6", url: "https://super-cdn.link/premiere6/index.m3u8" },
        { name: "Premiere 5", url: "https://super-cdn.link/premiere5/index.m3u8" },
        { name: "Premiere 4", url: "https://super-cdn.link/premiere4/index.m3u8" },
        { name: "Premiere 3", url: "https://super-cdn.link/premiere3/index.m3u8" },
        { name: "Premiere 2", url: "https://super-cdn.link/premiere2/index.m3u8" },
        { name: "Premiere Clubes", url: "http://dzcdn.vood.top/live/ottplayerchannel/JFYQWKNbCUe5/494.m3u8" },
        { name: "Sportv 3", url: "https://super-cdn.link/sportv3/index.m3u8" },
        { name: "Sportv 2", url: "https://super-cdn.link/sportv2/index.m3u8" },
        { name: "Sportv", url: "https://super-cdn.link/sportv/index.m3u8" },
        { name: "AXN", url: "https://cdn-3.nxplay.com.br/AXN_TK/tracks-v2a1/mono.m3u8" },
        { name: "Warner Channel", url: "https://cdn-3.nxplay.com.br/WARNER_CHANNEL/tracks-v2a1/mono.m3u8" },
        { name: "Hallo Movies", url: "https://cdn-3.nxplay.com.br/HALLOMOVIES/tracks-v1a1/mono.m3u8" },
        { name: "Movie Sphere", url: "https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg00353-lionsgatestudio-moviespherebrazil-samsungbr/playlist.m3u8" },
        { name: "Play Filmes", url: "https://cdn-3.nxplay.com.br/europaplay/tracks-v1a1/mono.m3u8" },

    ];

    // Adiciona os canais à lista de seleção
    channels.forEach(channel => {
        const option = document.createElement('option');
        option.value = channel.url;
        option.text = channel.name;
        channelSelect.appendChild(option);
    });

    // Altera o canal quando a seleção muda
    channelSelect.addEventListener('change', function() {
        if (this.value) {
            hls.loadSource(this.value);
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED, function() {
                video.play();
            });
        }
    });
} else {
    console.error("Este navegador não suporta HLS.");
}
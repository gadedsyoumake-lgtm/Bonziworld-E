// Code by ItzCrazyScout, CosmicStar98 and 'HOST'
// Private :-)



// cosmic fucking broke bonzitv

// will soon move bonzitv's video lists inside this javascript file to declutter meat.js

// go behh yourself

var bonziTvCommercialMode = false;
var bonziTvCool = false;

// youtube url variables 
let youtube_url = "https://www.youtube.com/watch?v=";
let youtube_tiny_url = "https://www.youtube.com/watch?v=";
let youtube_shorts_url = "";
let youtube_embed_url = "";
let youtube_music_url = "";


/*
  "https://www.youtube.com/watch?v=97dyt7MXWpo",
  "https://www.youtube.com/watch?v=t0JyCdk5ymo",
  "https://www.youtube.com/watch?v=bzXzGMbdQfY",
  "https://www.youtube.com/watch?v=DuD_boVOl54",
  "https://www.youtube.com/watch?v=APAcU3YBhYc",
  "https://www.youtube.com/watch?v=H50wW4eAFKo",
  "https://www.youtube.com/watch?v=MmB9b5njVbA",
  "https://www.youtube.com/watch?v=tYoO9XkCCHg",
  "https://www.youtube.com/watch?v=K0damuN_9bQ",
  "https://www.youtube.com/watch?v=hb59QZW2SCA",
  "https://www.youtube.com/watch?v=5ls7g9eH7ss",
  "https://www.youtube.com/watch?v=VJs_VALzi_8",
  "https://www.youtube.com/watch?v=GCA5CB5uUyA",
  "https://www.youtube.com/watch?v=CDLyImqvqVY",
  "https://www.youtube.com/watch?v=Wt2rGmUmm2A",
  "https://www.youtube.com/watch?v=YnuYnzXUuGY",
  "https://www.youtube.com/watch?v=exjhztp_IQY",
*/

// the clusterfuck of video ids
var videoIdsCommercials = [
  "https://www.youtube.com/watch?v=hb59QZW2SCA",
  "https://www.youtube.com/watch?v=b2OUKjLzcEc",
  "https://www.youtube.com/watch?v=Uyw-bne3G2A",
  "https://www.youtube.com/watch?v=gcGI1f24eyM",
  "https://www.youtube.com/watch?v=liqetY2e7a8",
  "https://www.youtube.com/watch?v=AykkOSaLphY",
  "https://www.youtube.com/watch?v=DSYiXCEWsVc",
  "https://www.youtube.com/watch?v=3rvFiHa6rJk",
  "https://www.youtube.com/watch?v=9943uVZ-eL4",
  "https://www.youtube.com/watch?v=EuEkdlCn-gI",
  "https://www.youtube.com/watch?v=75OKjPBYTCg",
  "https://www.youtube.com/watch?v=DuD_boVOl54",
  "https://www.youtube.com/watch?v=97dyt7MXWpo",
  "https://www.youtube.com/watch?v=APAcU3YBhYc",
  "https://www.youtube.com/watch?v=exjhztp_IQY",
  "https://www.youtube.com/watch?v=GCA5CB5uUyA",
  "https://www.youtube.com/watch?v=Olbq5oFe7KY",
  "https://www.youtube.com/watch?v=D1RsSixkCUk",
  "https://www.youtube.com/watch?v=PHtGZraA1fY",
  "https://www.youtube.com/watch?v=5ls7g9eH7ss",
  "https://www.youtube.com/watch?v=K0damuN_9bQ",
]
var videoIds4PM2430PM = [
  "https://www.youtube.com/watch?v=x0ipQWe1X9Y",
  "https://www.youtube.com/watch?v=WwnSgVJcGm8",
  "https://www.youtube.com/watch?v=lGT7GRoUsaw",
];
var videoIds5PM = [
  "https://www.youtube.com/watch?v=jEk6KkQGhDA",
  "https://www.youtube.com/watch?v=TzgxNR-uaXY",
  "https://www.youtube.com/watch?v=aa9hluRHjUY",
  "https://www.youtube.com/watch?v=lBDqN91Fqno",
  "https://www.youtube.com/watch?v=w6J8nIIQRNE",
  "https://www.youtube.com/watch?v=qbp4oAxmTCE",
  "https://www.youtube.com/watch?v=wKrbpuy2Okw",
];
var videoIds6PM = [
  "https://www.youtube.com/watch?v=iwxbY-p_w0w",
  "https://www.youtube.com/watch?v=pdO9uKpzaYU",
  "https://www.youtube.com/watch?v=8iEXhbqami8",
  "https://www.youtube.com/watch?v=T-BoDW1_9P4",
  "https://www.youtube.com/watch?v=NgHygsNwTNk",
  "https://www.youtube.com/watch?v=jPKuyeDb0mM",
  "https://www.youtube.com/watch?v=EDsDnR2dzlw",
  "https://www.youtube.com/watch?v=ljl1jBEY3_A",
  "https://www.youtube.com/watch?v=jIwqlKDPq4s",
  "https://www.youtube.com/watch?v=TGulB0MfxPs",
  "https://www.youtube.com/watch?v=ehlrUPrvFuk",
  "https://www.youtube.com/watch?v=vkUIyOm9hZk",
  "https://www.youtube.com/watch?v=t2Jpe0I5pa4",
  "https://www.youtube.com/watch?v=kHKJ9Mf8UxU",
  "https://www.youtube.com/watch?v=zwz5yJR_aFA",
  "https://www.youtube.com/watch?v=RdTJHVG_IdU",
  "https://www.youtube.com/watch?v=xe0P0rnsS1Q",
  "https://www.youtube.com/watch?v=OpUzx_JY_Ho",
];
var videoIds25MinutesofMSAgent = [
  "https://www.youtube.com/watch?v=V4we8iFk-fY", // Angry Video Game Nerd
  "https://www.youtube.com/watch?v=6M_4Yqk65f8",
  "https://www.youtube.com/watch?v=9DfdRdOM_B0",
  "https://www.youtube.com/watch?v=l-6WakV0kWM",
  "https://www.youtube.com/watch?v=XjUz8IT0CYg",
  "https://www.youtube.com/watch?v=y306cWw98a4",
  "https://www.youtube.com/watch?v=qVBerX6Dzmc",
  "https://www.youtube.com/watch?v=qVBerX6Dzmc",
  "https://www.youtube.com/watch?v=QVS0Uks4ZUw",
  "https://www.youtube.com/watch?v=sayp5lieKuU",
  "https://www.youtube.com/watch?v=ofM11nPzFo0",
  "https://www.youtube.com/watch?v=kMg6_IXCjo4",
  "https://www.youtube.com/watch?v=1raUvGNbZFg",
  "https://www.youtube.com/watch?v=3p713bNaO4A",
  "https://www.youtube.com/watch?v=MYDuy7wM8Gk",
  "https://www.youtube.com/watch?v=OEVzPCY2T-g",
  "https://www.youtube.com/watch?v=v7poR6G3hec",
  "https://www.youtube.com/watch?v=LkNvQYiM6bw",
  "https://www.youtube.com/watch?v=X7-mOhP7W7k",
  "https://www.youtube.com/watch?v=TLVGmvmNitg",
  "https://www.youtube.com/watch?v=qF2snKCmqJo",
  "https://www.youtube.com/watch?v=kZfq-IPlLF8",
  "https://www.youtube.com/watch?v=omW1E7rv7IM",
  "https://www.youtube.com/watch?v=g2eH3vYbdGo",
  "https://www.youtube.com/watch?v=VvR_3OTxs8A",
  "https://www.youtube.com/watch?v=gvnRBywkUZ0",
  "https://www.youtube.com/watch?v=RL0YWB8wMDs",
  "https://www.youtube.com/watch?v=t475kPIEXPg",
  "https://www.youtube.com/watch?v=M1tU61Nyv1w",
  "https://www.youtube.com/watch?v=eegQI9WM6mk",
  "https://www.youtube.com/watch?v=00xIvTOLrYA",
  "https://www.youtube.com/watch?v=CyqK8wqwYmc",
  "https://www.youtube.com/watch?v=l7XIbwtMl4Y",
  "https://www.youtube.com/watch?v=7O82pX2XQIQ",
  "https://www.youtube.com/watch?v=1CNddEz9dak",
  "https://www.youtube.com/watch?v=1dJXgJ1c4vY",
  "https://www.youtube.com/watch?v=cgCSbOy4mNU",
  "https://www.youtube.com/watch?v=tl2Wz1qlzco",
  "https://www.youtube.com/watch?v=kMz7JkVplpM",
  "https://www.youtube.com/watch?v=-LKK-6bmDgQ",
  "https://www.youtube.com/watch?v=rmq6bCVD4V8",
  "https://www.youtube.com/watch?v=km9vYa2GIUI",
  "https://www.youtube.com/watch?v=69ybxGPnuag",
  "https://www.youtube.com/watch?v=FJEXpsDB2XQ",
  "https://www.youtube.com/watch?v=PPKqp3H8xic",
  "https://www.youtube.com/watch?v=gU21wBNSVWU",
  "https://www.youtube.com/watch?v=nFOf70RyERU",
  "https://www.youtube.com/watch?v=6t2YvyLqw3c",
  "https://www.youtube.com/watch?v=LWltQ9UN5vE",
  "https://www.youtube.com/watch?v=FvT8jG1OVdI",
  "https://www.youtube.com/watch?v=a4QBeADNM34",
  "https://www.youtube.com/watch?v=hwmoJkHS-2E",
  "https://www.youtube.com/watch?v=w2ZX_ToJHFk",
  "https://www.youtube.com/watch?v=0Ta-4H92CkA",
  "https://www.youtube.com/watch?v=1A5B8fXp0aU",
  "https://www.youtube.com/watch?v=WEz0IoffV9g",
  "https://www.youtube.com/watch?v=M_aXcH1zDEE",
  "https://www.youtube.com/watch?v=PPKqp3H8xic",
  "https://www.youtube.com/watch?v=LBFjpE1BaXk",
  "https://www.youtube.com/watch?v=Vg0y9i5E7nY",
  "https://www.youtube.com/watch?v=IMrqAEwEpNE",
  "https://www.youtube.com/watch?v=a9io5dyRvmI",
  "https://www.youtube.com/watch?v=JvHtXn7uQ6I",
  "https://www.youtube.com/watch?v=Sqif27k-_Hg",
  "https://www.youtube.com/watch?v=xPsN_rcEpu4",
  "https://www.youtube.com/watch?v=6NMk9ujPZa4", // Microsoft Agent Plays
  "https://www.youtube.com/watch?v=R5_Tjis70L0",
  "https://www.youtube.com/watch?v=UqsLyy5uGRQ",
  "https://www.youtube.com/watch?v=-C52i5aSzk4",
  "https://www.youtube.com/watch?v=YWfP26EjoU8",
  "https://www.youtube.com/watch?v=z82vd74QCb4",
  "https://www.youtube.com/watch?v=IuL-yQvFLhM",
  "https://www.youtube.com/watch?v=GxB0xYeMPVQ",
  "https://www.youtube.com/watch?v=RPgmJhgrAj0",
  "https://www.youtube.com/watch?v=Lsni-hMn594",
  "https://www.youtube.com/watch?v=PSly8XQ-TQM",
  "https://www.youtube.com/watch?v=nS-3kpM9Ovg",
  "https://www.youtube.com/watch?v=6dQioyja4e8",
  "https://www.youtube.com/watch?v=QWdm6mLRJxA",
  //"https://www.youtube.com/watch?v=VRTuoilurZ",
  "https://www.youtube.com/watch?v=d68-HZjoSQw",
  "https://www.youtube.com/watch?v=dcFCucIQsv8",
  "https://www.youtube.com/watch?v=AdESAUZUJr8",
  "https://www.youtube.com/watch?v=OOntnyuecks",
  "https://www.youtube.com/watch?v=f0KB3bkmbOU",
  "https://www.youtube.com/watch?v=Nx1Q9m2EYOQ",
  "https://www.youtube.com/watch?v=5J0v7PdMHQY",
  "https://www.youtube.com/watch?v=pnhuAmh9K1E",
  "https://www.youtube.com/watch?v=i_wysAmPp7M",
  "https://www.youtube.com/watch?v=g1HNcG0gZrw",
  "https://www.youtube.com/watch?v=wooz39ArOPo",
  "https://www.youtube.com/watch?v=oIej7VudwMg",
  "https://www.youtube.com/watch?v=zs8Eu6Jh_Fo",
  "https://www.youtube.com/watch?v=p59UV_MGmvs",
  "https://www.youtube.com/watch?v=GikrLQBDJr4",
  "https://www.youtube.com/watch?v=n0WNbzdBzSM",
  "https://www.youtube.com/watch?v=3GI136Z82Nc",
  "https://www.youtube.com/watch?v=KB5e6OyfCws",
  "https://www.youtube.com/watch?v=0_KBkFzgEdo",
  "https://www.youtube.com/watch?v=7KV88KarKg0",
  "https://www.youtube.com/watch?v=qKw8GaFaLoA",
  "https://www.youtube.com/watch?v=MmGAxGaS_cg",
  "https://www.youtube.com/watch?v=otgKlXbBkG8",
  "https://www.youtube.com/watch?v=pj6tI8l4YLI",
  "https://www.youtube.com/watch?v=M3Ky21v3RC8",
  "https://www.youtube.com/watch?v=CWIqBU4QlGk",
  "https://www.youtube.com/watch?v=w4Zs5hVi3zM",
  "https://www.youtube.com/watch?v=rWU48g7scMo",
  "https://www.youtube.com/watch?v=UOGwOPKdO6A",
  "https://www.youtube.com/watch?v=KQtdZh3cGrc",
  "https://www.youtube.com/watch?v=0yRcRVt470I",
  "https://www.youtube.com/watch?v=bHHr76V4sDQ",
  "https://www.youtube.com/watch?v=wL1GZTqsJT8",
  "https://www.youtube.com/watch?v=dRfL4IRKRzo",
  "https://www.youtube.com/watch?v=LpGUS98ot3c",
  "https://www.youtube.com/watch?v=ggvzhhx11NI",
  "https://www.youtube.com/watch?v=_VRBA64vDD4",
  "https://www.youtube.com/watch?v=XyNJZ8PEWRM",
  "https://www.youtube.com/watch?v=CwUeKJt0j9o",
  "https://www.youtube.com/watch?v=ECEx2zQjaDc",
  "https://www.youtube.com/watch?v=luIwRawbmi0",
  "https://www.youtube.com/watch?v=lM4fBo8EMiE",
  "https://www.youtube.com/watch?v=EbNGrNF87AA",
  "https://www.youtube.com/watch?v=vPzCh5US-c4",
  "https://www.youtube.com/watch?v=trerahVOkuQ",
  "https://www.youtube.com/watch?v=1Xr5SfqWMmc",
  "https://www.youtube.com/watch?v=O7K3tcCZwUY",
  "https://www.youtube.com/watch?v=TitzY-BwoUY",
  "https://www.youtube.com/watch?v=6DJh-uSK9VQ",
  "https://www.youtube.com/watch?v=yl0URvSeGQs",
  "https://www.youtube.com/watch?v=T9ZadKJiHIA",
  "https://www.youtube.com/watch?v=3KM61CZTnOM",
  "https://www.youtube.com/watch?v=yVvd_IdkbkE",
  "https://www.youtube.com/watch?v=2bdGZxzr5rI",
  "https://www.youtube.com/watch?v=H8j8UFUNRWM",
  "https://www.youtube.com/watch?v=QodUVp53Hgg",
  "https://www.youtube.com/watch?v=yA4rw6GMr0c",
  "https://www.youtube.com/watch?v=7RT22IJs2k8",
  "https://www.youtube.com/watch?v=vFWNNXJJQ3o",
  "https://www.youtube.com/watch?v=6FmijN4BY4c",
  "https://www.youtube.com/watch?v=ybABNY3hwNU",
  "https://www.youtube.com/watch?v=W7aXWQFQlVg",
  "https://www.youtube.com/watch?v=ixK995Fnu1k",
  "https://www.youtube.com/watch?v=XfkoZgnR2vo",
  "https://www.youtube.com/watch?v=VcgX_koOHaA",
  "https://www.youtube.com/watch?v=4mhsINjjl5c",
  "https://www.youtube.com/watch?v=N1tkrdZJLmc",
  "https://www.youtube.com/watch?v=PX7dA-6XOHI",
  "https://www.youtube.com/watch?v=PO7oJkKFzs8",
  "https://www.youtube.com/watch?v=Y9HMu5mE8tY",
  "https://www.youtube.com/watch?v=h_3ihvxwROU",
  "https://www.youtube.com/watch?v=Sy92rG_Ccj8",
  "https://www.youtube.com/watch?v=xpV-0wyTYWs",
  "https://www.youtube.com/watch?v=dglne70EjoM",
  "https://www.youtube.com/watch?v=NKSEw85XjmA",
  "https://www.youtube.com/watch?v=seX868zryWU",
  "https://www.youtube.com/watch?v=-zVOsKwVED4",
  "https://www.youtube.com/watch?v=jHv_0sx0ZT4",
  "https://www.youtube.com/watch?v=7_4_QzQQric",
  "https://www.youtube.com/watch?v=6H3EZpG8JrY",
  "https://www.youtube.com/watch?v=9CXtCoPUTrI",
  "https://www.youtube.com/watch?v=LdLbRe09qas", // Android Trash
  "https://www.youtube.com/watch?v=u39KUBd2Q9I",
  "https://www.youtube.com/watch?v=vdCSSkMinvg",
  "https://www.youtube.com/watch?v=4PAiqcv08cU",
  "https://www.youtube.com/watch?v=g-r1Ug-hduw",
  "https://www.youtube.com/watch?v=yZtjYbwsTg8",
  "https://www.youtube.com/watch?v=HemR9r2dhZQ",
  "https://www.youtube.com/watch?v=tJEk1GAqQTg",
  "https://www.youtube.com/watch?v=Y4Ajyd6Hc0E",
  "https://www.youtube.com/watch?v=YQa2-DY7Y_Q", // Battle for Dream Island (Requested by SonicFan08)
  "https://www.youtube.com/watch?v=8LY0o_CgPR8",
  "https://www.youtube.com/watch?v=rhkgOXksmaY",
  "https://www.youtube.com/watch?v=cdmVPHdpECM",
  "https://www.youtube.com/watch?v=xHI-iKm31us",
  "https://www.youtube.com/watch?v=6vGgsXO57bs",
  "https://www.youtube.com/watch?v=Ze1p7bYXw0g",
  "https://www.youtube.com/watch?v=g0wCF04ddnw",
  "https://www.youtube.com/watch?v=Eg5Ja23HfhY",
  "https://www.youtube.com/watch?v=yhkDgX2b7po",
  "https://www.youtube.com/watch?v=U4sp10HUI6Y",
  "https://www.youtube.com/watch?v=BQBmKvRd0B0",
  "https://www.youtube.com/watch?v=yZqh3l3-pTM",
  "https://www.youtube.com/watch?v=pf9FHBM0SLQ",
  "https://www.youtube.com/watch?v=nAKk0gm73K0",
  "https://www.youtube.com/watch?v=Xmh7M7TXDRE",
  "https://www.youtube.com/watch?v=x4K1xKHwp0E",
  "https://www.youtube.com/watch?v=4pR6Y3_ahS8",
  "https://www.youtube.com/watch?v=J9udiROQchg",
  "https://www.youtube.com/watch?v=6OfKK5Rt3fY",
  "https://www.youtube.com/watch?v=GfFkiGgY6Pk",
  "https://www.youtube.com/watch?v=KLwgTM7HBhw",
  "https://www.youtube.com/watch?v=PigChYq_FrM",
  "https://www.youtube.com/watch?v=ye_HKD_C5o0", // Last Episode of Battle for Dream Island
  "https://www.youtube.com/watch?v=26FJTtLOu2s", // Battle for Dream Island Again
  "https://www.youtube.com/watch?v=cv1Qz0GCaxw",
  "https://www.youtube.com/watch?v=hsprecnxSsE",
  "https://www.youtube.com/watch?v=dXUE7OFij_I",
  "https://www.youtube.com/watch?v=E174ogB49xs",
  "https://www.youtube.com/watch?v=4q77g4xo9ic",
  "https://www.youtube.com/watch?v=YrsRLT3u0Cg",
  "https://www.youtube.com/watch?v=kaFpfSHllOw",
  "https://www.youtube.com/watch?v=RZB7nTzSl3g",
  "https://www.youtube.com/watch?v=rFUwZ0Vtims",
  "https://www.youtube.com/watch?v=mmlPwe71JkA", // IDFB
  "https://www.youtube.com/watch?v=2Jw0dhwmi3o",
  "https://www.youtube.com/watch?v=GoYe_yH0dVQ", // And that's all of them, I will NOT add BFB for christ's sake.
  "https://www.youtube.com/watch?v=l1-EsJtvm5w", // Inanimate Insanity
  "https://www.youtube.com/watch?v=5loEcrE1IvQ",
  "https://www.youtube.com/watch?v=scwqoN66DU0",
  "https://www.youtube.com/watch?v=Q4QADdy6rK4",
  "https://www.youtube.com/watch?v=ayHy91TVX1c",
  "https://www.youtube.com/watch?v=hK4Va5Tgrjs",
  "https://www.youtube.com/watch?v=DV6kqZSY5WE", // Windows Desktop Skits
  "https://www.youtube.com/watch?v=eO2LgSSTXqM",
  "https://www.youtube.com/watch?v=FeorAMjcV7E",
  "https://www.youtube.com/watch?v=lex-Ap58niY",
  "https://www.youtube.com/watch?v=exter6QAGS8",
  "https://www.youtube.com/watch?v=XBRxcnne5f4",
  "https://www.youtube.com/watch?v=dxtwzr-4UYo",
  "https://www.youtube.com/watch?v=1q9phQT3-wc",
  "https://www.youtube.com/watch?v=TD8InhMS1io",
  "https://www.youtube.com/watch?v=Jn6CXHufyos",
  "https://www.youtube.com/watch?v=fcPsjkhJLyw",
  "https://www.youtube.com/watch?v=oxir0CFO_SU",
  "https://www.youtube.com/watch?v=UitVP8YClNc",
  "https://www.youtube.com/watch?v=-y9TxoTt5eQ", // SF08 Remakes
  "https://www.youtube.com/watch?v=z1ApOo20pU4",
  "https://www.youtube.com/watch?v=TafPUncacTE",
  "https://www.youtube.com/watch?v=wNfMpAR-Oog",
  "https://www.youtube.com/watch?v=iKCNlur5wRY",
  "https://www.youtube.com/watch?v=yCRHUCSI20M",
  "https://www.youtube.com/watch?v=sCKONPsB_Qc",
  "https://www.youtube.com/watch?v=Ahqs4uhMwZI",
  "https://www.youtube.com/watch?v=tdh2cnxeLr0",
  "https://www.youtube.com/watch?v=ZYMKIoEpH2g",
  "https://www.youtube.com/watch?v=2NqPSuqVR1I",
  "https://www.youtube.com/watch?v=utEnG7tuJ1A",
  "https://www.youtube.com/watch?v=67XnrO-Cygc", // Controversial Fights
  "https://www.youtube.com/watch?v=qhUC2f6Zc_E",
  "https://www.youtube.com/watch?v=loT6siZ-RsY",
  "https://www.youtube.com/watch?v=B3M8Z1WqiKA",
  "https://www.youtube.com/watch?v=zZo0Tv9qHX0",
  "https://www.youtube.com/watch?v=mBY_bMhx8sM",
  "https://www.youtube.com/watch?v=urY0KAIJFAs", // Big Brother (Norbika9Studios)
  "https://www.youtube.com/watch?v=bYMHDws-pgM",
  "https://www.youtube.com/watch?v=7OmNVes1fpE",
  "https://www.youtube.com/watch?v=fAP9QncUi4Q",
  "https://www.youtube.com/watch?v=RKwqMjtmSJw",
  "https://www.youtube.com/watch?v=tqQe7z9dYUY",
  "https://www.youtube.com/watch?v=QEQCKigUPIs",
  "https://www.youtube.com/watch?v=rLRakngDL6s",
  "https://www.youtube.com/watch?v=o9LSCg97kq0",
  "https://www.youtube.com/watch?v=9m5oNSqw86I",
  "https://www.youtube.com/watch?v=RbaWrvJL5T8",
  "https://www.youtube.com/watch?v=Vx5o3YmsdHs",
  "https://www.youtube.com/watch?v=TZ27W-1mEy0",
  "https://www.youtube.com/watch?v=LRyqWcPT_NM",
  "https://www.youtube.com/watch?v=m0QUpZAKpDw",
  "https://www.youtube.com/watch?v=MseX1itqWGg",
  "https://www.youtube.com/watch?v=sHQMwKa6uas",
  "https://www.youtube.com/watch?v=DsnxhsuVSy8",
  "https://www.youtube.com/watch?v=UR8fNZlVt24",
  "https://www.youtube.com/watch?v=1MQpZzF_7jc",
  "https://www.youtube.com/watch?v=auU5kLcKy-Y",
  "https://www.youtube.com/watch?v=2rUrq3z5BMo",
  "https://www.youtube.com/watch?v=k1c0XVsUXoo",
  "https://www.youtube.com/watch?v=69aVFcBzFOI",
  "https://www.youtube.com/watch?v=96jxJ5BjW-E",
  "https://www.youtube.com/watch?v=5lAorPz8wpw", // MS Brother
  "https://www.youtube.com/watch?v=TPgibM4YO4E",
  "https://www.youtube.com/watch?v=m3jSuUt_7OU",
  "https://www.youtube.com/watch?v=HPo95uYQ0w4",
  "https://www.youtube.com/watch?v=2NKbLO_FgmU",
  "https://www.youtube.com/watch?v=D14p30WEJTk",
  "https://www.youtube.com/watch?v=Ju6Po7MIxx8",
  "https://www.youtube.com/watch?v=zg_nVZWZWMY",
  "https://www.youtube.com/watch?v=PtgyhN1D3TY",
  "https://www.youtube.com/watch?v=AxwQ6uvw_2o",
  "https://www.youtube.com/watch?v=Bp4ilONzdOk",
  "https://www.youtube.com/watch?v=jImbLUnU0-4",
  "https://www.youtube.com/watch?v=oe7a7ACeTzk",
  "https://www.youtube.com/watch?v=fSWsxweTt-I",
  "https://www.youtube.com/watch?v=XdvAiqLijHo",
  "https://www.youtube.com/watch?v=fsHyeLLKeVU",
  "https://www.youtube.com/watch?v=c4eyVSyYDS0",
  "https://www.youtube.com/watch?v=9fQn4x-Q9Og",
  "https://www.youtube.com/watch?v=2CCn4jVPZHA",
  "https://www.youtube.com/watch?v=MsjiiW4cDiA",
  "https://www.youtube.com/watch?v=DoYF4hdVuXo",
  "https://www.youtube.com/watch?v=w7PtP0IMOGk",
  "https://www.youtube.com/watch?v=gfnz3r9h4l0",
  "https://www.youtube.com/watch?v=MCMdqnBHtAk",
  "https://www.youtube.com/watch?v=lvyLjoiFvVg",
  "https://www.youtube.com/watch?v=N-md9T5BR18",
  "https://www.youtube.com/watch?v=313tAskX6JE",
  "https://www.youtube.com/watch?v=KD71GxsfHlo",
  "https://www.youtube.com/watch?v=C0-gaZocCIE",
  "https://www.youtube.com/watch?v=hsztXya8XQY",
  "https://www.youtube.com/watch?v=CLqykTlftv0",
  "https://www.youtube.com/watch?v=XAB7TVwsmo4",
  "https://www.youtube.com/watch?v=RD1GDlehR7Y",
  "https://www.youtube.com/watch?v=8rz_BftpeDw",
  "https://www.youtube.com/watch?v=vhBI0OoMo-0",
  "https://www.youtube.com/watch?v=S23n7Wk-Ap0",
  "https://www.youtube.com/watch?v=ME28jhesxoc",
  "https://www.youtube.com/watch?v=AdvEUGXxrKE",
  "https://www.youtube.com/watch?v=iJB5Y9gktmY",
  "https://www.youtube.com/watch?v=gKjbU1z1OlU",
  "https://www.youtube.com/watch?v=Brt-3GBibG0",
  "https://www.youtube.com/watch?v=6JNqciPFPaw",
  "https://www.youtube.com/watch?v=nr521F5QcZE",
  "https://www.youtube.com/watch?v=L5JXPUOVT_g",
  "https://www.youtube.com/watch?v=3AKSecr1fCM",
  "https://www.youtube.com/watch?v=VysHdJE7geI",
  "https://www.youtube.com/watch?v=SZ6O-bVdBZs",
  "https://www.youtube.com/watch?v=IHRypIXN4sk",
  "https://www.youtube.com/watch?v=c7lbN497xME", // MS Survivor
  "https://www.youtube.com/watch?v=wal930wpZVk",
  "https://www.youtube.com/watch?v=ZT3OVAbNbFw",
  "https://www.youtube.com/watch?v=QsJi0g8KjsE",
  "https://www.youtube.com/watch?v=gmq-BY_Xvs0",
  "https://www.youtube.com/watch?v=Zu8-GilShaM",
  "https://www.youtube.com/watch?v=xc6N_0YT2r8",
  "https://www.youtube.com/watch?v=BVnOxZdojLU",
  "https://www.youtube.com/watch?v=vW0KkWzJFGQ",
  "https://www.youtube.com/watch?v=WCz2JOsK3eI",
  "https://www.youtube.com/watch?v=4smyX6uztcU",
  "https://www.youtube.com/watch?v=T0w2OFRa-WE",
  "https://www.youtube.com/watch?v=kw3qd4ZnJlA",
  "https://www.youtube.com/watch?v=Sknyr0ngxdw",
  "https://www.youtube.com/watch?v=lLpp8VPUUfk",
  "https://www.youtube.com/watch?v=dHxr3i-hAvw",
  "https://www.youtube.com/watch?v=G95eQwPZwIA",
  "https://www.youtube.com/watch?v=pkGC_mfChDM",
  "https://www.youtube.com/watch?v=5hzRfTXSiKA",
  "https://www.youtube.com/watch?v=rjcJVX2fNFA",
  "https://www.youtube.com/watch?v=5WEVuRnfVw0",
  "https://www.youtube.com/watch?v=hvaTGjdOokM",
  "https://www.youtube.com/watch?v=PKabv16Xflo",
  "https://www.youtube.com/watch?v=RKo7CE0Oy9g",
  "https://www.youtube.com/watch?v=GXGjafoQEKw",
  "https://www.youtube.com/watch?v=_zcBUJHvMO4",
  "https://www.youtube.com/watch?v=_7aZky61SLA",
  "https://www.youtube.com/watch?v=6iUgGQ5a53c",
  "https://www.youtube.com/watch?v=YaYqZepboLI",
  "https://www.youtube.com/watch?v=2Yx1af6Rmuk",
  "https://www.youtube.com/watch?v=JTpxiAHRBks",
  "https://www.youtube.com/watch?v=AwsnLEOmn6A",
  "https://www.youtube.com/watch?v=iejA1OJy1-w",
  "https://www.youtube.com/watch?v=YmUmxIgj47M", // The Ident Review Extra
  "https://www.youtube.com/watch?v=vu-QSts3fgM",
  "https://www.youtube.com/watch?v=fyyIqQv3AFU",
  "https://www.youtube.com/watch?v=EYylawEAFbg",
  "https://www.youtube.com/watch?v=dYd70auXqZA",
  "https://www.youtube.com/watch?v=TPg8eOtIJJ4",
  "https://www.youtube.com/watch?v=Rq6dSGGfplE",
  "https://www.youtube.com/watch?v=nXsR5skjjqI",
  "https://www.youtube.com/watch?v=TyKvnQic6dg",
  "https://www.youtube.com/watch?v=GnVNgdLZagE",
  "https://www.youtube.com/watch?v=f0XzWa8NAHs",
  "https://www.youtube.com/watch?v=mPrFl-n4Kww",
  "https://www.youtube.com/watch?v=ztkmccVwgL4",
  "https://www.youtube.com/watch?v=dhMgTRbIQ2I",
  "https://www.youtube.com/watch?v=oZd27ngLs3M",
  "https://www.youtube.com/watch?v=nRpmlV7k180",
  "https://www.youtube.com/watch?v=o2gkc0a7OCA",
  "https://www.youtube.com/watch?v=_F-meZFFfh8",
  "https://www.youtube.com/watch?v=AkfWPFJYXRE",
  "https://www.youtube.com/watch?v=Z69Fpnm6RWs",
  "https://www.youtube.com/watch?v=NwMjkkwYqoE",
  "https://www.youtube.com/watch?v=LcTOdyUxCqk",
  "https://www.youtube.com/watch?v=UcV64IC9738",
  "https://www.youtube.com/watch?v=T1Qi6PVYH4g",
  "https://www.youtube.com/watch?v=GDqi1bOMhe4",
  "https://www.youtube.com/watch?v=tJmPnzwoyfo",
  "https://www.youtube.com/watch?v=XihWAtOlS10",
  "https://www.youtube.com/watch?v=1xGqTtYge5o",
  "https://www.youtube.com/watch?v=O7m-k7NfcGg",
  "https://www.youtube.com/watch?v=7WWjNv-GOD0",
  "https://www.youtube.com/watch?v=fGbp109fv2o",
  "https://www.youtube.com/watch?v=RDl-rEJnNuk",
  "https://www.youtube.com/watch?v=Bk1eem6Pdl0",
  "https://www.youtube.com/watch?v=3hk-R2JHOCc", // MSAgent Skits
  "https://www.youtube.com/watch?v=8AuhooxRgMo",
  "https://www.youtube.com/watch?v=zm1JSeN4qxI",
  "https://www.youtube.com/watch?v=5IuraurpPNA",
  "https://www.youtube.com/watch?v=Vx6ur7EmA74",
  "https://www.youtube.com/watch?v=LF8H-V8FM_w",
  "https://www.youtube.com/watch?v=qfF1pN42UKc",
  "https://www.youtube.com/watch?v=nOo1KN_wQfQ",
  "https://www.youtube.com/watch?v=dXw80n1pEZ8",
  "https://www.youtube.com/watch?v=Xj7l9xm0lcg",
  "https://www.youtube.com/watch?v=7B0Cuq4Q35o", // MSAgent Shorts
  "https://www.youtube.com/watch?v=vED-Ce-5kF0",
  "https://www.youtube.com/watch?v=6eFgnA9L1iM",
  "https://www.youtube.com/watch?v=iEfqa_iEdms",
  "https://www.youtube.com/watch?v=ZCIDlnz5gs0", // Wrapper Shorts
  "https://www.youtube.com/watch?v=HbrB8Yg4BjY",
  "https://www.youtube.com/watch?v=QRi2dgoDPB8",
  "https://www.youtube.com/watch?v=4uYaGwX6wMg",
  "https://www.youtube.com/watch?v=0md1-WUN1xo",
  "https://www.youtube.com/watch?v=4h9_C2bh3hg",
  "https://www.youtube.com/watch?v=El6psMMOY-s",
  "https://www.youtube.com/watch?v=FW66sJ3atX0",
  "https://www.youtube.com/watch?v=jm-dky4HN7o",
  "https://www.youtube.com/watch?v=9ElyM2gXiD8",
  "https://www.youtube.com/watch?v=1P-Usp129Ug"
];

const log = require("./log.js").log;
const Ban = require("./ban.js");
const Utils = require("./utils.js");
const io = require('./server.js').io;
const sanitize = require("sanitize-html");
const sleep = require("util").promisify(setTimeout);
const axios = require('axios').default;
const snekfetch = require("snekfetch");
const fs = require('fs');
var settings = JSON.parse(fs.readFileSync("./json/settings.json"));
//const http = require('http');
//const https = require('https');


// Variable for toggling Replit mode
const isReplit = settings.isReplit;

if (isReplit === false) {
	var port = 80;
} else {
	var port = process.env.port || settings.port;
}

process.on("uncaughtException", (err) => {
        console.log(err.stack);
        throw err;
});


// fuck off bozoworlders!
function sanitizeHTML(string){
	if (typeof string == "string") {
		return string
			.replaceAll("&", "&")
			.replaceAll("#", "#")
			//.replaceAll("'", "'")
			.replaceAll("\"", "\"");
	} else {
		return;
	}
}
function sanitizeHTML2(string){
return string
    .replaceAll("&", "&")
    .replaceAll("#", "#")
    .replaceAll("'", "'")
    .replaceAll("\"", "\"");
}

var onCooldown = false;
var onloginCooldown = false;
var registerCool = false;
var registerCooldwn;
let roomsPublic = [];
let rooms = {};
let usersAll = [];
let sockets = [];
var ips = [];
var noflood = [];
let mutes = Ban.mutes;


var Filter = require('bad-words'),
    filter = new Filter();

// https://stackoverflow.com/questions/3144711/find-the-time-left-in-a-settimeout
function getTimeLeft(timeout) {
    return Math.ceil((timeout._idleStart + timeout._idleTimeout - Date.now()) / 1000);
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

exports.beat = function () {
    io.on("connection", function (socket) {
        new User(socket);
    });
};

var settingsSantize = {
    allowedTags: ["h1", "h2", "h3", "h4", "h5", "h6", "blockquote", "p", "a", "ul", "ol", "nl", "li", "b", "i", "strong", "em", "strike", "code", "hr", "br", "div", "table", "thead", "caption", "tbody", "tr", "th", "td", "pre", "iframe", "marquee", "button", "input", "details", "summary", "progress", "meter", "font", "span", "select", "option", "abbr", "acronym", "adress", "article", "aside", "bdi", "bdo", "big", "center", "site", "data", "datalist", "dl", "del", "dfn", "dialog", "dir", "dl", "dt", "fieldset", "figure", "figcaption", "header", "ins", "kbd", "legend", "mark", "nav", "optgroup", "form", "q", "rp", "rt", "ruby", "s", "sample", "section", "small", "sub", "sup", "template", "textarea", "tt", "u"],
    allowedAttributes: {
        a: ["href", "name", "target"],
        p: ["align"],
        table: ["align", "border", "bgcolor", "cellpadding", "cellspadding", "frame", "rules", "width"],
        tbody: ["align", "valign"],
        tfoot: ["align", "valign"],
        td: ["align", "colspan", "headers", "nowrap"],
        th: ["align", "colspan", "headers", "nowrap"],
        textarea: ["cols", "dirname", "disabled", "placeholder", "maxlength", "readonly", "required", "rows", "wrap"],
        pre: ["width"],
        ol: ["compact", "reversed", "start", "type"],
        option: ["disabled"],
        optgroup: ["disabled", "label", "selected"],
        legend: ["align"],
        li: ["type", "value"],
        hr: ["align", "noshade", "size", "width"],
        fieldset: ["disabled"],
        dialog: ["open"],
        dir: ["compact"],
        bdo: ["dir"],
        marquee: ["behavior", "bgcolor", "direction", "width", "height", "loop", "scrollamount", "scrolldelay"],
        button: ["disabled"],
        input: ["value", "type", "disabled", "maxlength", "max", "min", "placeholder", "readonly", "required", "checked"],
        details: ["open"],
        div: ["align"],
        progress: ["value", "max"],
        meter: ["value", "max", "min", "optimum", "low", "high"],
        font: ["size", "family", "color"],
        select: ["disabled", "multiple", "require"],
        ul: ["type", "compact"],
        "*": ["hidden", "spellcheck", "title", "contenteditable", "data-style"],
    },
    selfClosing: ["img", "br", "hr", "area", "base", "basefont", "input", "link", "meta", "wbr"],
    allowedSchemes: ["http", "https", "ftp", "mailto", "data"],
    allowedSchemesByTag: {},
    allowedSchemesAppliedToAttributes: ["href", "src", "cite"],
    allowProtocolRelative: true,
};

const { join } = require("path");
const { Webhook, MessageBuilder } = require("discord-webhook-node");
const hook = new Webhook("https://discordapp.com/api/webhooks/1319593476869849118/JwEn9XhRcTXL7COvRwpjForKmwpL8pa_SUtzJwKlPeHI4gvKppM-fWdcgOgdS6IoB9Oz");


var stickers = {
    sex: "the sex sticker has been removed",
    sad: "so sad",
    bonzi: "BonziBUDDY",
    host: "host is a bathbomb",
    spook: "ew im spooky",
    forehead: "you have a big forehead",
    ban: "i will ban you so hard right now",
    flatearth: "this is true, and you cant change my opinion loser",
    swag: "look at my swag",
    topjej: "toppest jej",
    cyan: "cyan is yellow",
    no: "fuck no",
    bye: "bye i'm fucking leaving",
    kiddie: "the kiddie sticker has been removed",
    big_bonzi: "you picked the wrong room id fool!",
    lol: "lol",
    flip: "fuck you",
    sans: "fuck you",
    crybaby: "crybaby",
};

function emojify(txt) {
	return txt.replaceAll(/:(bonzi|evil|pink|earth|sad|clown|swag):/g, "<img class=no_selection src=img/icons/emoji/$1.png draggable=false>")
}

var noflood = [];
const activeUsers = {};


function checkRoomEmpty(room) {
    if (room.users.length != 0) return;

    log.info.log('debug', 'removeRoom', {
        room: room
    });

    let publicIndex = roomsPublic.indexOf(room.rid);
    if (publicIndex != -1)
        roomsPublic.splice(publicIndex, 1);
    
    room.deconstruct();
    delete rooms[room.rid];
    delete room;
}

class Room {
    constructor(rid, prefs) {
        this.rid = rid;
        this.users = [];
		this.prefs = prefs;
		this.background = "#6d33a0";
			
		const date = new Date();
		const hours = date.getHours();
		const minutes = date.getMinutes();
		if (hours == 16 && minutes <= 30) {
		  var num = Math.floor(Math.random() * videoIds4PM2430PM.length);
		  var vid = videoIds4PM2430PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://www.youtube.com/", "");
		  this.vid = vid;
		} else if (hours == 17) {
		  var num = Math.floor(Math.random() * videoIds5PM.length);
		  var vid = videoIds5PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://www.youtube.com/", "");
		  this.vid = vid;
		} else if (hours == 14) {
		  var num = Math.floor(Math.random() * videoIds5PM.length);
		  var vid = videoIds5PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://www.youtube.com/", "");
		  this.vid = vid;
		} else if (hours == 18 && minutes <= 30) {
		  var num = Math.floor(Math.random() * videoIds6PM.length);
		  var vid = videoIds6PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://www.youtube.com/", "");
		  this.vid = vid;
		} else if (hours == 19) {
		  var num = Math.floor(Math.random() * videoIds6PM.length);
		  var vid = videoIds6PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://www.youtube.com/", "");
		  this.vid = vid;
		} else {
		  var num = Math.floor(Math.random() * videoIds25MinutesofMSAgent.length);
		  var vid = videoIds25MinutesofMSAgent[num].replace("https://www.youtube.com/watch?v=", "").replace("https://www.youtube.com/", "");
		  this.vid = vid;
		}
    }
	
	
    deconstruct() {
        try {
            this.users.forEach((user) => {
                user.disconnect();
            });
        } catch (e) {
            log.info.log('warn', 'roomDeconstruct', {
                e: e,
                thisCtx: this
            });
        }
        //delete this.rid;
        //delete this.prefs;
        //delete this.users;
    }

    isFull() {
        return this.users.length >= this.prefs.room_max;
    }

    join(user) {
        noflood.push(user.socket);
        user.socket.join(this.rid);
        this.users.push(user);
        this.updateUser(user);
    }

    leave(user) {
        // HACK
        try {
            this.emit('leave', {
                 guid: user.guid
            });
     
            let userIndex = this.users.indexOf(user);
     
            if (userIndex == -1) return;
            this.users.splice(userIndex, 1);
     
            checkRoomEmpty(this);
        } catch(e) {
            log.info.log('warn', 'roomLeave', {
                e: e,
                thisCtx: this
            });
        }
    }

    updateUser(user) {
		this.emit('update', {
			guid: user.guid,
			userPublic: user.public
        });
    }

    getUsersPublic() {
        let usersPublic = {};
        this.users.forEach((user) => {
            usersPublic[user.guid] = user.public;
        });
        return usersPublic;
    }

    emit(cmd, data) {
		io.to(this.rid).emit(cmd, data);
    }
}

function newRoom(rid, prefs) {
    rooms[rid] = new Room(rid, prefs);
    log.info.log('debug', 'newRoom', {
        rid: rid
    });
}


let godword_random = Math.floor((Math.random() * 1000000000000000) + 10);
if (isReplit === false) {
	console.log('Godword:', godword_random)

	setInterval(function() {
		console.log('Godword:', godword_random)
	}, 60 * 1000); 
}

let userCommands = {
    godmode: function (word) {
                if (isReplit === false) {
                        var bonzi_godword = godword_random;
                } else {
			var bonzi_godword = this.room.prefs.godword;
		}
		let success = word == bonzi_godword;
			if (success) {
				this.private.runlevel = 3;
				this.socket.emit("admin");
			} else {
				this.socket.emit("alert", 'Wrong password. Did you try "Password"?');
			}
			log.info.log("info", "godmode", {
				guid: this.guid,
				success: success,
			});
	},
    "sanitize": function() {
        let sanitizeTerms = ["false", "off", "disable", "disabled", "f", "no", "n"];
        let argsString = Utils.argsString(arguments);
        this.private.sanitize = !sanitizeTerms.includes(argsString.toLowerCase());
    },
    "joke": function() {
        this.room.emit("joke", {
            guid: this.guid,
            rng: Math.random()
        });
    },
	  behhjoke: function() {
		this.room.emit("behh", {
		  guid: this.guid,
		  rng: Math.random(),
		});
	  },
	  
    "behhfact": function() {
        this.room.emit("behhfact", {
            guid: this.guid,
            rng: Math.random()
        });
    },
	behh: function () {
		this.room.emit("talk", {
			text: "Behh is the worst message! \
        It's horrendous and spammy. I hate it. \
        The point of messages are to show thoughts, but what thought does this show? \
        Do you just wake up in the morning and think \"wow, I really feel like a massive fucking behh today\"? \
        It's useless. I hate it. It just provokes a deep rooted anger within me whenever I hear it. \
        I want to drive on over to fucking onutes house and kill him. If this was a skin I'd push it off a fucking cliff. \
        People just say behh as if it's funny. It's not. Behh deserves to die. \
        It deserves to have his smug little sound smashed in with a hammer. \
        Oh wow, it's a nonsense, how fucking hilarious, I'll use it in every message I post. NO. STOP IT. It deserves to burn in hell. \
        Why is it so goddamn dumb. You're a 4 letter work, you have no life goals, you will never accomplish anything in life apart from pissing me off. \
        When you die nobody will mourn. I hope you die",
			guid: this.guid
		})
	},
    "fact": function() {
        this.room.emit("fact", {
            guid: this.guid,
            rng: Math.random()
        });
    },
    "fixbonzitv": function() {
        
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      var bonziTvIdent = videoIdsCommercials;
      var ident = Math.floor(Math.random() * bonziTvIdent.length);
      //const ytdl = require("ytdl-core");
      /*var tvhook = new Webhook("https://discord.com/api/webhooks/1022179106412036166/8cJeQN1dFC78Rar0pdjAEyYnsFFq--ZiWZt4WTT1--pnLikWRzwGjOHWYEYmtdmyjcRg");*/

      if (bonziTvCommercialMode) {

        var num = Math.floor(Math.random() * videoIdsCommercials.length);
        var vid = videoIdsCommercials[num].replace("https://www.youtube.com/watch?v=", "").replace("https://www.youtube.com/", "");
        this.room.vid = vid;

        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        this.room.emit("replaceTVWithURL", {
          id: videoIdsCommercials[Math.floor(Math.random() * videoIdsCommercials.length)].replace("https://www.youtube.com/watch?v=", "").replace("https://www.youtube.com/", ""),
          identId: videoIdsCommercials[num].replace("https://www.youtube.com/watch?v=", "").replace("https://www.youtube.com/", ""),
        });
      } else {
        if ((hours == 16 && minutes <= 30) || (hours == 9 && minutes <= 25) || (hours == 13 && minutes <= 20)) {
          var num = Math.floor(Math.random() * videoIds4PM2430PM.length);
          var vid = videoIds4PM2430PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://www.youtube.com/", "");
          this.room.vid = vid;
          //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
          /*await ytdl.getInfo("https://www.youtube.com/watch?v=" + vid).then((info) => {
            console.log("Playing video: " + info.videoDetails.title);
            if (info.videoDetails.title.match(/BFDI/g) || info.videoDetails.title.match(/BFDIA/g)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=0eGC9tMZ8co"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (
              info.videoDetails.title.match(/Microsoft Agent/gi) ||
              info.videoDetails.title.match(/MSAgent/gi) ||
              info.videoDetails.title.match(/PGG Rebooted/g) ||
              info.videoDetails.title.match(/Skits/g) ||
              info.videoDetails.title.match(/BonziBUDDY/g)
            ) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=13A2ycR6ruc"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (
              info.videoDetails.title.match(/Clips Tape/g) ||
              info.videoDetails.title.match(/Left 4 Dead/gi) ||
              info.videoDetails.title.match(/How it FEELS/g) ||
              info.videoDetails.title.match(/Gets Grounded/g) ||
              info.videoDetails.title.match(/Brian and Steve/g)
            ) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (info.videoDetails.title.match(/Youtube Poop/gi)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (info.videoDetails.title.match(/Vinesauce/gi)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=qlYR9mW1DVk"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            }
          });*/
          this.room.emit("replaceTVWithURL", {
            id: videoIds4PM2430PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://www.youtube.com/", ""),
            identId: bonziTvIdent[ident].replace("https://www.youtube.com/watch?v=", ""),
          });
        } else if (hours == 17) {
          var num = Math.floor(Math.random() * videoIds5PM.length);
          var vid = videoIds5PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://www.youtube.com/", "");
          this.room.vid = vid;
          /*await ytdl.getInfo("https://www.youtube.com/watch?v=" + vid).then((info) => {
            console.log("Playing video: " + info.videoDetails.title);
            if (info.videoDetails.title.match(/BFDI/g) || info.videoDetails.title.match(/BFDIA/g)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=0eGC9tMZ8co"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (
              info.videoDetails.title.match(/Microsoft Agent/gi) ||
              info.videoDetails.title.match(/MSAgent/gi) ||
              info.videoDetails.title.match(/PGG Rebooted/g) ||
              info.videoDetails.title.match(/Skits/g) ||
              info.videoDetails.title.match(/BonziBUDDY/g)
            ) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=13A2ycR6ruc"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (
              info.videoDetails.title.match(/Clips Tape/g) ||
              info.videoDetails.title.match(/Left 4 Dead/gi) ||
              info.videoDetails.title.match(/How it FEELS/g) ||
              info.videoDetails.title.match(/Gets Grounded/g) ||
              info.videoDetails.title.match(/Brian and Steve/g)
            ) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (info.videoDetails.title.match(/Youtube Poop/gi)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (info.videoDetails.title.match(/Vinesauce/gi)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=qlYR9mW1DVk"];
              ident = Math.floor(Math.random() * bonziTvIdent.length); 
            }
          });*/
          //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
          this.room.emit("replaceTVWithURL", {
            id: videoIds5PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://www.youtube.com/", ""),
            identId: bonziTvIdent[ident].replace("https://www.youtube.com/watch?v=", ""),
          });
        } else if (hours == 18 && minutes <= 20) {
          var num = Math.floor(Math.random() * videoIds6PM.length);
          var vid = videoIds6PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://www.youtube.com/", "");
          this.room.vid = vid;
          /*await ytdl.getInfo("https://www.youtube.com/watch?v=" + vid).then((info) => {
            console.log("Playing video: " + info.videoDetails.title);
            if (info.videoDetails.title.match(/BFDI/g) || info.videoDetails.title.match(/BFDIA/g)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=0eGC9tMZ8co"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (
              info.videoDetails.title.match(/Microsoft Agent/gi) ||
              info.videoDetails.title.match(/MSAgent/gi) ||
              info.videoDetails.title.match(/PGG Rebooted/g) ||
              info.videoDetails.title.match(/Skits/g) ||
              info.videoDetails.title.match(/BonziBUDDY/g)
            ) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=13A2ycR6ruc"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (
              info.videoDetails.title.match(/Clips Tape/g) ||
              info.videoDetails.title.match(/Left 4 Dead/gi) ||
              info.videoDetails.title.match(/How it FEELS/g) ||
              info.videoDetails.title.match(/Gets Grounded/g) ||
              info.videoDetails.title.match(/Brian and Steve/g)
            ) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (info.videoDetails.title.match(/Youtube Poop/gi)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (info.videoDetails.title.match(/Vinesauce/gi)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=qlYR9mW1DVk"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            }
          });*/
          //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
          this.room.emit("replaceTVWithURL", {
            id: videoIds6PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://www.youtube.com/", ""),
            identId: bonziTvIdent[ident].replace("https://www.youtube.com/watch?v=", ""),
          });
        } else if (hours == 19 && minutes <= 22) {
          var num = Math.floor(Math.random() * videoIds6PM.length);
          var vid = videoIds6PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://www.youtube.com/", "");
          this.room.vid = vid;
          /*await ytdl.getInfo("https://www.youtube.com/watch?v=" + vid).then((info) => {
            console.log("Playing video: " + info.videoDetails.title);
            if (info.videoDetails.title.match(/BFDI/g) || info.videoDetails.title.match(/BFDIA/g)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=0eGC9tMZ8co"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (
              info.videoDetails.title.match(/Microsoft Agent/gi) ||
              info.videoDetails.title.match(/MSAgent/gi) ||
              info.videoDetails.title.match(/PGG Rebooted/g) ||
              info.videoDetails.title.match(/Skits/g) ||
              info.videoDetails.title.match(/BonziBUDDY/g)
            ) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=13A2ycR6ruc"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (
              info.videoDetails.title.match(/Clips Tape/g) ||
              info.videoDetails.title.match(/Left 4 Dead/gi) ||
              info.videoDetails.title.match(/How it FEELS/g) ||
              info.videoDetails.title.match(/Gets Grounded/g) ||
              info.videoDetails.title.match(/Brian and Steve/g)
            ) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (info.videoDetails.title.match(/Youtube Poop/gi)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (info.videoDetails.title.match(/Vinesauce/gi)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=qlYR9mW1DVk"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            }
          });*/
          //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
          this.room.emit("replaceTVWithURL", {
            id: videoIds6PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://www.youtube.com/", ""),
            identId: bonziTvIdent[ident].replace("https://www.youtube.com/watch?v=", ""),
          });
        } else {
          var num = Math.floor(Math.random() * videoIds25MinutesofMSAgent.length);
          var vid = videoIds25MinutesofMSAgent[num].replace("https://www.youtube.com/watch?v=", "").replace("https://www.youtube.com/", "");
          this.room.vid = vid;
          /*await ytdl.getInfo("https://www.youtube.com/watch?v=" + vid).then((info) => {
            console.log("Playing video: " + info.videoDetails.title);
            if (info.videoDetails.title.match(/BFDI/g) || info.videoDetails.title.match(/BFDIA/g)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=0eGC9tMZ8co"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (
              info.videoDetails.title.match(/Microsoft Agent/gi) ||
              info.videoDetails.title.match(/MSAgent/gi) ||
              info.videoDetails.title.match(/PGG Rebooted/g) ||
              info.videoDetails.title.match(/Skits/g) ||
              info.videoDetails.title.match(/BonziBUDDY/g)
            ) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=13A2ycR6ruc"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (
              info.videoDetails.title.match(/Clips Tape/g) ||
              info.videoDetails.title.match(/Left 4 Dead/gi) ||
              info.videoDetails.title.match(/How it FEELS/g) ||
              info.videoDetails.title.match(/Gets Grounded/g) ||
              info.videoDetails.title.match(/Brian and Steve/g)
            ) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (info.videoDetails.title.match(/Youtube Poop/gi)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (info.videoDetails.title.match(/Vinesauce/gi)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=qlYR9mW1DVk"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            }
          });*/
          //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
          this.room.emit("replaceTVWithURL", {
            id: videoIds25MinutesofMSAgent[num].replace("https://www.youtube.com/watch?v=", "").replace("https://www.youtube.com/", ""),
            identId: bonziTvIdent[ident].replace("https://www.youtube.com/watch?v=", ""),
          });
        }
      }
    },
	  backflip: function(swag) {
		this.room.emit("backflip", {
		  guid: this.guid,
		  swag: swag == "swag",
		});
	  },
	  mom: function() {
		this.room.emit("youtube", {
		  guid: this.guid,
		  vid: "Ay95gZr0Bm8",
		});
	  },
	changelog: function () {
		this.socket.emit('alert', { title: "Changelog", msg: '<ul><li>Initial Release.\n', button:"Ok", sanitize: true });
	},
	effect: function (...txt) {
		if (txt[0] == "remove") txt = [""]
		this.public.effect = txt.join(" ")
	},
	update: function () {
		settings = JSON.parse(fs.readFileSync("./json/settings.json"));
	},
    sticker: function (sticker) {
        if (Object.keys(stickers).includes(sticker)) {
            this.room.emit("talk", {
                text: sanitizeHTML(`<img class=no_selection src=img/icons/stickers/${sticker}.png draggable=false width=170>`),
                say: stickers[sticker],
                guid: this.guid,
            });
        } else {
            this.socket.emit('alert',{title:'Error 404',msg:'That sticker doesn\'t exist.',button:"Ok"});
        }
    },
    wtf: function (text) {
        var wtf = [
            "i cut a hole in my computer so i can fuck it",
            "i hate minorities",
            "i said /godmode password and it didnt work",
            "i like to imagine i have sex with my little pony characters",
            "ok yall are grounded grounded grounded grounded grounded grounded grounded grounded grounded for 64390863098630985 years go to ur room",
            "i like to eat dog crap off the ground",
            "i can use inspect element to change your name so i can bully you",
            "i can ban you, my dad is seamus",
            "why do woman reject me, i know i masturbate in public and dont shower but still",
            "put your dick in my nose and lets have nasal sex",
            "my cock is 6 ft so ladies please suck it",
            "please make pope free",
            "whats that color",
            "I got a question. but it's a serious, yes, serious thing that I have to say! AAAAAAAAAAA! I! am! not! made! by! Pixel works! Pixel works doesn't make microsoft agent videos! Kieran G&A Doesn't exist! Anymore! So, if you guys keep mocking me that i am made by Pixel works (Originally Aqua) or Kieran G&A, then i am gonna commit kill you! huff, puff, that is all.",
            "This PC cannot run Windows 11. The processor isn't supported for Windows 11. While this PC doesn't meet the system requirements, you'll keep getting Windows 10 Updates.",
            "I made Red Brain Productions, and i deny that i am made by Pixelworks",
            "100. Continue.",
            "418. I'm a teapot.",
            "I am SonicFan08 and i like Norbika9Entertainment and grounded videos! Wow! I also block people who call me a gotard!",
            "When BonziWORLD leaks your memory, your system will go AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
            "Bonkey sugar. Anything that makes one physically satisfied. By extension, anything good or desirable. The following are examples of things which are most certainly bonkey sugar...",
            "i like to harass bonziworld fans on bonziworld",
            "there is a fucking white bird in my chest please get him out",
            "i am that frog that is speaking chinese",
            "i don't let anyone have any fun like holy shit i hate bonziworld soooooooooo much!",
            "i make gore art out of dream as fucking usual",
            "yummy yummy two letter object in my tummy! yummy in my tummy! i pretend to be david and terrorize the fuck out of my friends!",
            "why the fuck are you hating Twitter?! what did they do to you?!",
            "seamus has a weird- NO YOU FUCKING DONT! YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY! [[ IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII",
            "This is not a test. You have been caught as a 'funny child harassment' moment. you will be banned. You got banned! Why? Being retarded? IDK. You literally harass BonziWORLD Fans. How dare you!",
            "fingerprinting on bonzi.world is giving out your location! real! not fake!",
            "how many fucking times have i told you? GIVE ME THE MARIO 64 BETA ROM NOW NOW NOW NOW NOW NOW NOW NOW NOW NOW NOW NOW NOW NOW NOW NOW NOW NOW NOW NOW NOW NOW NOW NOW NOW NOW NOW NOW NOW NOW!",
            "<p hidden> i have nothing to say </p>",
            "Yeah, of course " + this.public.name + " wants me to use /wtf. [[???????????]] Hah hah! Look at the stupid " + this.public.color + " character embarassing himself! Fuck you. It isn't funny.",
            "I am getting fucking tired of you using this command. Fucking take a break already!",
            "DeviantArt",
            "You're a [['fVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVkjng]] asshole!",
            "javascript",
            "BonziWORLD.exe has encountered and error and needs to close. Nah, seriously, you caused this error to happen because you used /wtf.",
            "moo!",
            "host bathbomb",
            "Hi.",
            "hiii i'm soundcard from mapper league",
            "I injected some soundcard syringes into your browser. <small>this is obviously fake</small>",
            "--image <img class=no_selection src=//cdn.discordapp.com/emojis/854164241527209995.gif?v=1 draggable=false></img>",
            "i listen to baby from justin bieber",
            "i watch numberblocks",
            "i watch doodland and now people are calling me a doodtard",
            "i watch bfdi and now people are calling me a objecttard",
            "i post klasky csupo effects and now people are calling me a logotard",
            "i inflate people, and body inflation is my fetish.",
            "i installed BonziBUDDY on my pc and now i have a virus",
            "i deleted system32",
            "i flood servers, and that makes me cool.",
            "I unironically do ERPs that has body inflation fetishism with people. Do you have a problem with that? YES! INFLATION FUCKING SUCKS YOU STUPID PERSON NAMED GERI!",
            "I unironically do ERPs that has body inflation fetishism with people. Do you have a problem with that? YES! INFLATION FUCKING SUCKS YOU STUPID PERSON NAMED BOWGART!",
            "I unironically do ERPs that has body inflation fetishism with people. Do you have a problem with that? YES! INFLATION FUCKING SUCKS YOU STUPID PERSON NAMED POM POM!",
            "I unironically do ERPs that has body inflation fetishism with people. Do you have a problem with that? YES! INFLATION FUCKING SUCKS YOU STUPID PERSON NAMED WHITTY!",
            "Hi. My name is DanielTR52 and i change my fucking mind every 1 picosecond. Also, ICS fucking sucks. Nope, now he doesnt. Now he does. Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.  Now he doesnt. Now he does.",
            "i still use the wii u&trade;",
            "i used homebrew on my nintendo switch and i got banned",
            "i bricked my wii",
            "muda muda muda muda!",
            "i am going to post inflation videos because, remember: 'I inflate people and inflation is my fetish.'",
            "i copy other people's usernames",
            "i use microsoft agent scripting helper for fighting videos against innocent people that did nothing wrong by just friendly commenting",
            "i use microsoft agent scripting helper for gotard videos",
            "i use hotswap for my xbox 360",
            "i boycotted left 4 dead 2",
            "CAN U PLZ UNBAN ME PLZ PLZ PLZ PLZ PLZ PLZ PLZ PLZ",
            "Hey, " + this.public.name + " You're a fucking asshole!",
            "Damn, " + this.public.name + " really likes /wtf",
            "I use a leaked build of Windows 11 on my computer.",
            "Do you know how much /wtf quotes are there?",
            "Fun Fact: You're a fucking asshole",
            "i watch body inflation videos on youtube",
            "ItzCrazyScout, No! More like.... ekfheiophjeodxenwobifuodhndoxnwsiohbdeiowdhn2werifhwefief! He banned euhdeioqwdheiwohjixzojqsioh r23oipwshnwq! End of rant.",
            "Pro Hacker: NEAGEUR! [[llllllllllllll]] NEAGEUR!",
            "i play left 4 dead games 24/7",
            "i am so cool. i shit on people, add reactions  that make fun of users on discord, and abuse my admin powers. i am really so cool.",
            "This product will not operate when connected to a device which makes unauthorized copies. Please refer to your instruction booklet for more information.",
            "hey medic i like doodland",
            "i installed windows xp on my real computer",
            "i am whistler and i like to say no u all the time",
            "HEY EVERYONE LOOK AT ME I USE NO U ALL THE TIME LMAO",
            "i like to give my viewers anxiety",
            "how to make a bonziworld server?",
            "shock, blood loss, infection; [['oU: hoUhoUhoUhoU]]! i love stabbing!",
            "I AM ANGRY BECAUSE I GOT BANNED! I WILL MAKE A MASH VIDEO OUT OF ME GETTING BANNED!",
            "oh you're approaching me!",
            "MUTED! HEY EVERYONE LOOK AT ME I SAY MUTED IN ALL CAPS WHEN I MUTE SOMEONE LMAO",
            "can you boost my server? no? you're mean!>:(",
            "no u",
            "numberblocks is my fetish",
            "#inflation big haram",
            "Sorry, i don't want you anymore.",
            "Twitter Cancel Culture! Twitter Cancel Culture! Twitter Cancel Culture! Twitter Cancel Culture! Twitter Cancel Culture!",
            "cry about it",
            "<p hidden>[[??????????????????????????????????????????????????????????????????????????????????????]] Hello? Is anyone there? Please help me!</p>",
            "SyntaxError: Unexpected string",
            "i post random gummibar videos on bonziworld",
            "i support meatballmars",
            "PLEASE GIVE THIS VIDEO LIKES!!!!! I CANNOT TAKE IT ANYMORE!",
            "I WILL MAKE A BAD VIDEO OUT OF YOU! GRRRRRRRRRRRR!",
            "Muted",
            "i keep watching doodland like forever now",
            "i mined diamonds with a wooden pickaxe",
            "i kept asking for admin and now i got muted",
            "I FAP TO FEMMEPYRO NO JOKE",
            "i like to imagine that i am getting so fat for no reason at all",
            "i am not kid",
            "i want mario beta rom hack now!",
            "i am a gamer girl yes not man no im not man i am gamer girl so give me money and ill giv you my adress ♥♥",
            "i used grounded threats and now i got hate",
            "i post pbs kids and now people are calling me a pbskidstard",
            "Oh my gosh! PBS Kids new logo came on July 19th!",
            "i will flood the server but people still thinked that i will not flood, the flooder hates are psychopaths, a skiddie, psychology and mentallity",
            "i used inspect element and now i got hate",
            "hi i am vacbedlover want to show my sexual fetish. I just kept evading my ban on collabvm to act like a forkie.",
            "i watch the potty song and now people are calling me a pottytard",
            "bonziworld reacts to... zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
            "i am danieltr52 the clown and i have inflation fetish",
            "i watch nature on pbs",
            "i post thomas theme song and now people are calling me a thomastard",
            "i pee my pants",
            "Wow! TVOKids is awesome- No! Its not awesome, you idiotic TVOKids fan!",
            "i watch grounded videos and now people are calling me a gotard",
            "Hi i am DanielTR52 and i have inflation fetish my friends please hate on seamus from making bad videos out of me",
            "Excuse me, CUT! We made another color blooper! glass breaking sound effect WAAAAAAAAAAAA! inhale WAAAAAAAAAAAA! Well that was uncalled for. It was! Anyways, you guys are in the colors of the AidenTV logo. Looks down BOING! Oh, oops. It's okay, swap the colors back to normal and then we'll do Take 48! Snap",
            "DOGGIS!",
            "i watch bfb and now people are calling me a objecttard",
            "This is not a test. You have been caught as a 'funny child harassment' moment. you will be banned. You got banned! Why? Being retarded? IDK. You literally harass BonziWORLD Fans. How dare you!",
            "fingerprinting on bonzi.world is giving out your location! real! not fake!",
            "i post pinkfong the potty song and now people are calling me a pinkfongtard",
            "my favorite flash nickelodeon clickamajig is Dress Up Sunny Funny",
            "i snort dill pickle popcorn seasoning",
            "i listen to planet custard's greated song, the potty song and now i got hate",
            "I got a question. but it's a serious, yes, serious thing that I have to say! AAAAAAAAAAA! I! am! not! made! by! Pixel works! Pixel works doesn't make microsoft agent videos! Kieran G&A Doesn't exist! Anymore! So, if you guys keep mocking me that i am made by Pixel works (Originally Aqua) or Kieran G&A, then i am gonna commit kill you! huff, puff, that is all.",
            "This PC cannot run Windows 11. The processor isn't supported for Windows 11. While this PC doesn't meet the system requirements, you'll keep getting Windows 10 Updates.",
            "I made Red Brain Productions, and i deny that i am made by Pixelworks",
            "I am SonicFan08 and i like Norbika9Entertainment and grounded videos! Wow! I also block people who call me a gotard!",
            "When BonziWORLD leaks your memory, your system will go AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
            "i post i got banned on bonziworld and now i got hate",
            "i post babytv and now people are calling me a babytvtard",
            "i post sf08 news and now i got hate",
            "i listen to spongebob theme song and now i got hate",
			"What the fuck did you just fucking say about me, you little bitch? I'll have you know I graduated top of my class in the Navy Seals, and I've been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I'm the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You're fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that's just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little 'clever' comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn't, you didn't, and now you're paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You're fucking dead, skiddo."
        ];
        var num = Math.floor(Math.random() * wtf.length);
        this.room.emit("talk", {
            text: wtf[num],
            guid: this.guid,
        });
        this.room.emit("wtf", {
            text: wtf[num],
            guid: this.guid,
        });
    },
    "youtube": function(vidRaw) {
        if (vidRaw.includes("\"")) {return};
        if (vidRaw.includes("'")) {return};
        var vid = this.private.sanitize ? sanitize(sanitizeHTML(vidRaw)) : sanitizeHTML(vidRaw);
        this.room.emit("youtube", {
            guid: this.guid,
            vid: vid,
        });
    },
    "soundcloud": function(audRaw) {
        if (audRaw.includes("\"")) {return};
        if (audRaw.includes("'")) {return};
        var aud = this.private.sanitize ? sanitize(sanitizeHTML(audRaw)) : sanitizeHTML(audRaw);
        this.room.emit("soundcloud", {
            guid: this.guid,
            aud: aud,
        });
    },
    "spotify": function(audRaw) {
        if (audRaw.includes("\"")) {return};
        if (audRaw.includes("'")) {return};
        var aud = this.private.sanitize ? sanitize(sanitizeHTML(audRaw)) : sanitizeHTML(audRaw);
        this.room.emit("spotify", {
            guid: this.guid,
            aud: aud,
        });
    },
    "image": function (imgRaw) {
        if (imgRaw.includes("\"")) {return};
        if (imgRaw.includes("'")) {return};
        var img = this.private.sanitize ? sanitize(sanitizeHTML(imgRaw)) : sanitizeHTML(imgRaw);
        this.room.emit("image", {
            guid: this.guid,
            img: img,
            vid: img, // backwards compatibility
        });
    }, 
    "img": function (imgRaw) {
        if (imgRaw.includes("\"")) {return};
        if (imgRaw.includes("'")) {return};
        var img = this.private.sanitize ? sanitize(sanitizeHTML(imgRaw)) : sanitizeHTML(imgRaw);
        this.room.emit("image", {
            guid: this.guid,
            img: img,
            vid: img, // backwards compatibility
        });
    }, 
    "video": function (vidRaw) {
        if (vidRaw.includes("\"")) {return};
        if (vidRaw.includes("'")) {return};
        var vid = this.private.sanitize ? sanitize(sanitizeHTML(vidRaw)) : sanitizeHTML(vidRaw);
        this.room.emit("video", {
            guid: this.guid,
            vid: vid,
        });
    },
    "audio": function (audRaw) {
        if (audRaw.includes("\"")) {return};
        if (audRaw.includes("'")) {return};
        var aud = this.private.sanitize ? sanitize(sanitizeHTML(audRaw)) : sanitizeHTML(audRaw);
        this.room.emit("audio", {
            guid: this.guid,
            aud: aud,
        });
    },
	  swag: function() {
		this.room.emit("swag", {
		  guid: this.guid,
		});
	  },
	  bang: function() {
		this.room.emit("bang", {
		  guid: this.guid,
		});
	  },
	  earth: function() {
		this.room.emit("earth", {
		  guid: this.guid,
		});
	  },
	  grin: function() {
		this.room.emit("grin", {
		  guid: this.guid,
		});
	  },
	  clap: function() {
		if (this.public.color == "clippy" || this.public.color == "red_clippy" || this.public.color == "clippypope") {
		  this.room.emit("clap_clippy", {
			guid: this.guid,
		  });
		} else {
		  this.room.emit("clap", {
			guid: this.guid,
		  });
		}
	  },
	  wave: function() {
		this.room.emit("wave", {
		  guid: this.guid,
		});
	  },
	  nod: function() {
		this.room.emit("nod", {
		  guid: this.guid,
		});
	  },
	  acknowledge: function() {
		this.room.emit("nod", {
		  guid: this.guid,
		});
	  },
	  shrug: function() {
		this.room.emit("shrug", {
		  guid: this.guid,
		});
	  },
	  greet: function() {
		this.room.emit("greet", {
		  guid: this.guid,
		});
	  },
	  css: function(...txt) {
		this.room.emit("css", {
		  guid: this.guid,
		  css: txt.join(" "),
		});
	  },
	  sendraw: function(...txt) {
		this.room.emit("sendraw", {
		  guid: this.guid,
		  text: txt.join(" "),
		});
	  },

	  godlevel: function() {
		this.socket.emit("alert", "Your godlevel is " + this.private.runlevel + ".");
	  },
	  broadcast: function(...text) {
		this.room.emit("alert", text.join(" "));
	  },
	  background: function(text) {
		if (typeof text != "string") {
		  this.socket.emit("alert", "ratio");
		} else {
		  this.room.background = text;
		  this.room.emit("background", { background: text });
		}
	  },
	  confused: function() {
		this.room.emit("confused", {
		  guid: this.guid,
		});
	  },
	  sad: function() {
		this.room.emit("sad", {
		  guid: this.guid,
		});
	  },
	  banana: function() {
		this.room.emit("banana", {
		  guid: this.guid,
		});
	  },
	  surprised: function() {
		this.room.emit("surprised", {
		  guid: this.guid,
		});
	  },
	  laugh: function() {
		this.room.emit("laugh", {
		  guid: this.guid,
		});
	  },
	  write: function() {
		this.room.emit("write", {
		  guid: this.guid,
		});
	  },
	  write_once: function() {
		this.room.emit("write_once", {
		  guid: this.guid,
		});
	  },
	  write_infinite: function() {
		this.room.emit("write_infinite", {
		  guid: this.guid,
		});
	  },
	  swag: function() {
		this.room.emit("swag", {
		  guid: this.guid,
		});
	  },
	  think: function() {
		this.room.emit("think", { 
		  guid: this.guid,
		});
	  },
	  surfjoin: function() {
		this.room.emit("surfjoin", {
		  guid: this.guid,
		});
	  },
	  surfleave: function() {
		this.room.emit("surfleave", {
		  guid: this.guid,
		});
	  },
	  surf: function() {
		this.room.emit("surf", {
		  guid: this.guid,
		});
	  }, 
    toppestjej: function () {
        this.room.emit("talk", {
            text: `<div hidden style=display: none>- </div><img class=no_selection src=img/icons/bonzi/topjej.png draggable=false>`,
            say: "toppest jej",
            guid: this.guid,
        });
    },
    arcade: function () {
        this.socket.emit("arcade");
    },
    acid: function () {
        this.socket.emit("acid");
    },
	
    kick: function (data) {
        if (this.private.runlevel < 3) {
            this.socket.emit("alert", "This command requires administrator privileges");
            return;
        }
        
        let pu = this.room.getUsersPublic()[data];
        if (pu && pu.color) {
            let target;
            this.room.users.map((n) => {
                if (n.guid == data) {
                    target = n;
                }
            });
            target.socket.emit("kick", {
                reason: "You got kicked.",
            });
            target.disconnect();
        } else {
            this.socket.emit("alert", "The user you are trying to kick left. Get dunked on nerd");
        }
    },
    ban: function (data) {
        if (this.private.runlevel < 3) {
            this.socket.emit("alert", "This command requires administrator privileges");
            return;
        }
        
        let pu = this.room.getUsersPublic()[data];
        if (pu && pu.color) {
            let target;
            this.room.users.map((n) => {
                if (n.guid == data) {
                    target = n;
                }
            });
            if (target.getIp() == "::1") {
                Ban.removeBan(target.getIp());
            } else if (target.getIp() == "::ffff:127.0.0.1") {
                Ban.removeBan(target.getIp());
            } else {
                if (target.private.runlevel > 2 && this.getIp() != "::1" && this.getIp() != "::ffff:127.0.0.1") {
                    return;
                }
                Ban.addBan(target.getIp(), 24 * 3600, "You got banned.");
                target.socket.emit("ban", {
                    reason: data.reason,
                });
                target.disconnect();
            }
        } else {
            this.socket.emit("alert", "The user you are trying to ban left. Get dunked on nerd");
        }
    },
	"unban": function(ip) {
        if (this.private.runlevel < 3) {
            this.socket.emit("alert", "This command requires administrator privileges");
            return;
        }
		Ban.removeBan(ip)
		console.log('unbanned ' + ip);
    },
    hypnotize: function (data) {
        if (this.private.runlevel < 3) {
            this.socket.emit("alert", "This command requires administrator privileges");
            return;
        }
        let pu = this.room.getUsersPublic()[data];
        if (pu && pu.color) {
          let target;
          this.room.users.map((n) => {
            if (n.guid == data) {
              target = n;
            }
          });
          if (!Ban.isIn(target.getIp())) {

            target.public.name = target.public.name.split('').map((v) =>
              Math.random() < .5 ? v.toUpperCase() : v.toLowerCase()
            ).join('');
            target.public.color = "fuckunesupporter";
            this.room.updateUser(target);

          }
        } else {
          this.socket.emit("alert", "The user you are trying to hypnotize left. Get dunked on nerd");
        }
    },
    nofuckoff: function (data) {
        if (this.private.runlevel < 3) {
            this.socket.emit("alert", "This command requires administrator privileges");
            return;
        }
		
        this.room.emit("nofuckoff", {
            guid: data,
        });
        var user = this;
        setTimeout(function () {
            let pu = user.room.getUsersPublic()[data];
            if (pu && pu.color) {
                let target;
                user.room.users.map((n) => {
                    if (n.guid == data) {
                        target = n;
                    }
                });
                setTimeout(function () {
                    target.disconnect();
                    target.socket.emit("kick", {
                        reason: "No fuck off<br><br><video style='border-radius: 3px;' src=\"https://cdn.discordapp.com/attachments/954050025170825237/1025126830845472798/DankVideo15.mp4\" autoplay loop width=380>",
						//reason: "No fuck off<br><audio style='display: none;' src=\"/sfx/no_fuck_off.mp3\" autoplay loop width=380>",
                    });
                }, 380);
            } else {
                user.socket.emit("alert", "The user you are trying to dissolve left. Get dunked on nerd");
            }
        }, 1084);
    },
	"warn": function(ip, reason) {
        if (this.private.runlevel < 3) {
            this.socket.emit("alert", "This command requires administrator privileges");
            return;
        }
		Ban.warn(ip, reason)
		console.log('warning to ' + ip + ' ' + reason);
    },
    "report": function (ip, name, reason) {
		Ban.addReport(ip, name, reason, this.public.name, this.room.rid);
    },
    gif: async function () {
        
        var bonzi = this;
		if (sanitize(Utils.argsString(arguments)) == "") return;
        const q = await axios.get(
            'https://tenor.googleapis.com/v2/search' +
            `?q=` + sanitize(Utils.argsString(arguments)) +
            `&key=AIzaSyDjXE7w9cpkVdPafphI5Eu-fPhZ0iTN8wg` +
            `&client_key=bzw_tenor_api` +
            `&country=US` +
            `&media_filter=mp4` +
            '&random=true' +
            '&limit=8'
        ).then(function (response) {
            var top_10_gifs = response.data["results"];
			if (top_10_gifs[0] != null) {
				bonzi.room.emit("video", {
					guid: bonzi.guid,
					vid: top_10_gifs[0]["media_formats"]["mp4"]["url"],
				});
			}
          }); 
        
    },
    obama: async function (args) {
        
        // not original code, i took it from hgrunt and then changed some things
        const arg = sanitize(Utils.argsString(arguments));
        const words = arg.split(" ").join(" ");
        let request;

        try {
            this.socket.emit("talk", {
                guid: this.guid,
                text: "<small>Only you can see this.</small><br>/obama is processing your text input...<br><progress>",
                say: "-e",
            });
            request = await snekfetch.post("http://talkobamato.me/synthesize.py", { redirect: false }).attach("input_text", words);
        } catch (err) {
            console.error(err);
            this.socket.emit("talk", {
                guid: this.guid,
                text: "<small>Only you can see this.</small><br>Command failed! Probably an issue with your input.",
                say: "Command failed! Probably an issue with your input.",
            });
            return;
        }

        //console.log(request.headers.location);
        const videoURLBase = `http://talkobamato.me/synth/output/${request.headers.location.split("=")[1]}`;
        const videoURL = `${videoURLBase}/obama.mp4`;
        const videoDoneURL = `${videoURLBase}/video_created.txt`;
        let videoDone = await snekfetch.get(videoDoneURL).catch(() => {});

        while (!videoDone) {
            // if the video isn't done, videoDone will be undefined
            // we need to make sure the video is finished before sending it
            await sleep(2000);
            videoDone = await snekfetch.get(videoDoneURL).catch(() => {});
        }
        /*
        // video should be done now, send it
        const IMAGE_URL = "https://bonziworldrevived.tk/img/bonzi_closeup/" + this.public.color + ".png";
        //hook.setUsername(this.public.name);
        //hook.setAvatar(IMAGE_URL);
        //tmafe//hook.setUsername(this.public.name);
        //tmafe//hook.setAvatar(IMAGE_URL);
        //hook.send(this.public.name + " sent /obama: " + videoURL);
        hook2.setUsername(this.public.name);
        hook2.setAvatar(IMAGE_URL);
        hook2.send(this.public.name + " sent /obama: " + videoURL);
        //tmafe//hook.send(this.public.name + " sent /obama: " + videoURL);
        */
        this.room.emit("video" /*"video2"*/, {
            guid: this.guid,
            vid: videoURL,
        });
    },
    godlevel: function () {
        this.socket.emit("alert", "Your godlevel is: " + this.private.runlevel + ".");
    },
    "twiggered": "passthrough",
    "triggered": "passthrough",
    "linux": "passthrough",
    "pawn": "passthrough",
    "bees": "passthrough",
	
  setbonzitvvid: function(vidRaw) {
    if (this.room.rid != "bonzi_tv") return;


    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    var vidId = this.private.sanitize ? sanitize(vidRaw) : vidRaw;
    //var tvhook = new Webhook("https://discord.com/api/webhooks/1022179106412036166/8cJeQN1dFC78Rar0pdjAEyYnsFFq--ZiWZt4WTT1--pnLikWRzwGjOHWYEYmtdmyjcRg");

    if (Math.random() * 3 == 1) {
      if ((hours == 16 && minutes <= 30) || (hours == 9 && minutes <= 25)) {
        var num = Math.floor(Math.random() * videoIds4PM2430PM.length);
        var vid = videoIds4PM2430PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://www.youtube.com/", "");
        this.room.vid = vid;

        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        this.room.emit("replaceTVWithURL", {
          id: videoIds4PM2430PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://www.youtube.com/", ""),
          identId: vidId,
        });
      } else if (hours == 17) {
        var num = Math.floor(Math.random() * videoIds5PM.length);
        var vid = videoIds5PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://www.youtube.com/", "");
        this.room.vid = vid;
        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        this.room.emit("replaceTVWithURL", {
          id: videoIds5PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://www.youtube.com/", ""),
          identId: vidId,
        });
      } else if (hours == 18 && minutes <= 30) {
        var num = Math.floor(Math.random() * videoIds6PM.length);
        var vid = videoIds6PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://www.youtube.com/", "");
        this.room.vid = vid;
        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        this.room.emit("replaceTVWithURL", {
          id: videoIds6PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://www.youtube.com/", ""),
          identId: vidId,
        });
      } else if (hours == 19 && minutes <= 22) {
        var num = Math.floor(Math.random() * videoIds6PM.length);
        var vid = videoIds6PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://www.youtube.com/", "");
        this.room.vid = vid;
        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        this.room.emit("replaceTVWithURL", {
          id: videoIds6PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://www.youtube.com/", ""),
          identId: vidId,
        });
      } else {
        var num = Math.floor(Math.random() * videoIds25MinutesofMSAgent.length);
        var vid = videoIds25MinutesofMSAgent[num].replace("https://www.youtube.com/watch?v=", "").replace("https://www.youtube.com/", "");
        this.room.vid = vid;
        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        this.room.emit("replaceTVWithURL", {
          id: videoIds25MinutesofMSAgent[num].replace("https://www.youtube.com/watch?v=", "").replace("https://www.youtube.com/", ""),
          identId: vidId,
        });
      }
    } else {
      if ((hours == 16 && minutes <= 30) || (hours == 9 && minutes <= 25) || (hours == 13 && minutes <= 20)) {
        var num = Math.floor(Math.random() * videoIds4PM2430PM.length);
        var vid = videoIds4PM2430PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://www.youtube.com/", "");
        this.room.vid = vid;
        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        this.room.emit("replaceTVWithURL", {
          id: videoIds4PM2430PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://www.youtube.com/", ""),
          identId: vidId,
        });
      } else if (hours == 17) {
        var num = Math.floor(Math.random() * videoIds5PM.length);
        var vid = videoIds5PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://www.youtube.com/", "");
        this.room.vid = vid;
        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        this.room.emit("replaceTVWithURL", {
          id: videoIds5PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://www.youtube.com/", ""),
          identId: vidId,
        });
      } else if (hours == 18 && minutes <= 30) {
        var num = Math.floor(Math.random() * videoIds6PM.length);
        var vid = videoIds6PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://www.youtube.com/", "");
        this.room.vid = vid;
        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        this.room.emit("replaceTVWithURL", {
          id: videoIds6PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://www.youtube.com/", ""),
          identId: vidId,
        });
      } else if (hours == 19 && hours <= 22) {
        var num = Math.floor(Math.random() * videoIds6PM.length);
        var vid = videoIds6PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://www.youtube.com/", "");
        this.room.vid = vid;
        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        this.room.emit("replaceTVWithURL", {
          id: videoIds6PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://www.youtube.com/", ""),
          identId: vidId,
        });
      } else if (hours == 23 || (hours == 22 && minutes >= 9)) {
        //tvhook.send("BonziTV is now off air.");
        this.room.emit("replaceTVWithURL", {
          id: "zjWHkwQTRss",
          hourAmount: hours,
          minuteAmount: minutes,
          identId: bonziTvIdent[ident].replace("https://www.youtube.com/watch?v=", ""),
        });
      } else {
        var num = Math.floor(Math.random() * videoIds25MinutesofMSAgent.length);
        var vid = videoIds25MinutesofMSAgent[num].replace("https://www.youtube.com/watch?v=", "").replace("https://www.youtube.com/", "");
        this.room.vid = vid;
        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        this.room.emit("replaceTVWithURL", {
          id: videoIds25MinutesofMSAgent[num].replace("https://www.youtube.com/watch?v=", "").replace("https://www.youtube.com/", ""),
          identId: vidId,
        });
      }
    }
  },

  setbonzitvvid2: function(vidRaw) {
    if (this.room.rid != "bonzi_tv") return;


    var vidId = this.private.sanitize ? sanitize(vidRaw) : vidRaw;
    this.room.vid = vidId;
    this.room.emit("replaceTVWithURL", {
      id: vidId,
      identId: vidId,
    });
  },
  setbonzitvvid3: function(vidRaw) {
    if (this.room.rid != "bonzi_tv") return;


    var bonziTvIdent = ["https://www.youtube.com/watch?v=w9uJg68CV4g", "https://www.youtube.com/watch?v=GCA5CB5uUyA", "https://www.youtube.com/watch?v=rBPKOZNd7mA", "https://www.youtube.com/watch?v=VJs_VALzi_8"];
    var ident = Math.floor(Math.random() * bonziTvIdent.length);
    var vidId = this.private.sanitize ? sanitize(vidRaw) : vidRaw;
    this.room.vid = vidId;
    this.room.emit("replaceTVWithURL", {
      id: vidId,
      identId: bonziTvIdent[ident].replace("https://www.youtube.com/watch?v=", ""),
    });
  },
  setbonzitvvid4: function(vidRaw) {

    var vidId = this.private.sanitize ? sanitize(vidRaw) : vidRaw;
    this.room.vid = vidId;
    this.room.emit("replaceTVWithURL", {
      identId: vidId,
    });
  },
  setbonzitvvid5: function(vidRaw) {


    var bonziTvIdent = ["https://www.youtube.com/watch?v=hb59QZW2SCA", "https://www.youtube.com/watch?v=b2OUKjLzcEc", "https://www.youtube.com/watch?v=Uyw-bne3G2A", "https://www.youtube.com/watch?v=gcGI1f24eyM", "https://www.youtube.com/watch?v=liqetY2e7a8", "https://www.youtube.com/watch?v=AykkOSaLphY", "https://www.youtube.com/watch?v=DSYiXCEWsVc", "https://www.youtube.com/watch?v=3rvFiHa6rJk", "https://www.youtube.com/watch?v=9943uVZ-eL4", "https://www.youtube.com/watch?v=EuEkdlCn-gI", "https://www.youtube.com/watch?v=DuD_boVOl54", "https://www.youtube.com/watch?v=97dyt7MXWpo", "https://www.youtube.com/watch?v=APAcU3YBhYc", "https://www.youtube.com/watch?v=exjhztp_IQY", "https://www.youtube.com/watch?v=GCA5CB5uUyA", "https://www.youtube.com/watch?v=5ls7g9eH7ss"];
    var ident = Math.floor(Math.random() * bonziTvIdent.length);
    var vidId = this.private.sanitize ? sanitize(vidRaw) : vidRaw;
    this.room.vid = vidId;
    this.room.emit("replaceTVWithURL", {
      id: vidId,
      identId: bonziTvIdent[ident].replace("https://www.youtube.com/watch?v=", ""),
    });
  },
  crosscolor: function(color) {
    var clrurl = this.private.sanitize ? sanitize(color) : color;
    if (clrurl.match(/105197343/gi) || clrurl.match(/1038507/gi) || clrurl.match(/pope/gi) || clrurl.match(/plop/gi) || clrurl.match(/780654/gi) || clrurl.match(/bonzi.lol/gi)) {
      this.disconnect();
      return;
    }
    if (clrurl.match(/fjnviwjnf/gi)) {
		this.socket.emit("talk", {
			guid: this.guid,
			text: doofScript,
			say: "\pit=400\\spd=250\behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh ",
		});	
		return;
    }
    if ((clrurl.match(/.png/gi) || clrurl.match(/.jpeg/gi) || clrurl.match(/.gif/gi) || clrurl.match(/.webp/gi))) {
      this.public.color = "empty";
      this.public.color_cross = clrurl;
      this.room.updateUser(this);
    } else {

      this.socket.emit("alert", "The crosscolor must be a valid image URL from Discord.\nValid file image types are: .png, .jpeg, .gif, .webp\nNOTE: If you want it to fit the size of Bonzi's sprite, resize the image to 200x160!\nWARNING: Using Bonzi.lol colors will result in a ban!");

    }
	
    //this.socket.emit("alert", "Access to this command has been disabled.");
  },
	  colorcustom: function(hue, saturation) {
		if (hue != null && saturation != null) {
		  this.public.hue = hue;
		  this.public.saturation = saturation;
		  this.socket.emit("setColor", `${hue} ${saturation}`)
		}
		this.room.updateUser(this);
	  },
	  colorcustom2: function(hue, saturation) {
		if (hue != null && saturation != null) {
		  this.public.hue = hue;
		  this.public.saturation = saturation;
		}
		this.room.updateUser(this);
	  },
    "color": function(color) {
        if (typeof color != "undefined") {
            if (settings.bonziColors.indexOf(color) == -1) return;
            
            this.public.color = color;
        } else {
            this.public.color = settings.bonziColors[
                Math.floor(Math.random() * settings.bonziColors.length)
            ];
        }
        this.room.updateUser(this);
    },
    "char": function(color) {
        if (typeof color != "undefined") {
            if (settings.chars.indexOf(color) == -1) return;
            
            this.public.color = color;
        } else {
            this.public.color = settings.chars[
                Math.floor(Math.random() * settings.chars.length)
            ];
        }
        this.room.updateUser(this);
    },
    "voice": function(voice) {
        if (typeof voice != "undefined" && typeof voice == "string") {
            this.public.voice = voice;
        } else {
            this.public.voice = settings.bonziVoices[
                Math.floor(Math.random() * settings.bonziVoices.length)
            ];
        }
        this.room.updateUser(this);
    },
	pope: function() {
		if (this.private.runlevel === 3) { // removing this will cause chaos
			this.public.color = "pope";
			this.room.updateUser(this);
		} else {
			this.socket.emit("alert", "Ah ah ah! You didn't say the magic word!")
		}
    },
	god: function() {
		if (this.private.runlevel === 3) { // removing this will cause chaos
			this.public.color = "god";
			this.room.updateUser(this);
		} else {
			this.socket.emit("alert", "Ah ah ah! You didn't say the magic word!")
		}
    },
		
	  givepopeto: function(data) {
		if (this.private.runlevel < 3) {
		  this.socket.emit("alert", "admin=true");
		  return;
		}
		let pu = this.room.getUsersPublic()[data];
		if (pu && pu.color) {
			let target;
			this.room.users.map((n) => {
				if (n.guid == data) {
					target = n;
				}
			});
			target.public.color = "pope";
			target.room.updateUser(target);
		} else {
		  this.socket.emit("alert", { title: "oh fuck", msg: "The user you are trying to popeify left. Get dunked on nerd", button: "Ok I'll" });
		}
	  },
	  givegodto: function(data) {
		if (this.private.runlevel < 3) {
		  this.socket.emit("alert", "admin=true");
		  return;
		}
		let pu = this.room.getUsersPublic()[data];
		if (pu && pu.color) {
			let target;
			this.room.users.map((n) => {
				if (n.guid == data) {
					target = n;
				}
			});
			target.public.color = "god";
			target.room.updateUser(target);
		} else {
		  this.socket.emit("alert", { title: "oh fuck", msg: "The user you are trying to godify left. Get dunked on nerd", button: "Ok I'll" });
		}
	  },
	slap: function() {
		this.room.emit("slap", {
		  guid: this.guid,
		});
	},
	present: function() {
		this.room.emit("present", {
		  guid: this.guid,
		});
	},
    "asshole": function() {
        this.room.emit("asshole", {
            guid: this.guid,
            target: sanitize(Utils.argsString(arguments)),
        });
    },
    "baduser": function() {
        this.room.emit("baduser", {
            guid: this.guid,
            target: sanitize(Utils.argsString(arguments)),
        });
    },
    "owo": function() {
        this.room.emit("owo", {
            guid: this.guid,
            target: sanitize(Utils.argsString(arguments)),
        });
    },
    "uwu": function () {
        this.room.emit("uwu", {
            guid: this.guid,
            target: sanitize(Utils.argsString(arguments)),
        });
    },
    "welcome": function () {
        this.room.emit("welcome", {
            guid: this.guid,
            target: sanitize(Utils.argsString(arguments)),
        });
    },
    "vaporwave": function() {
        this.socket.emit("vaporwave");
        this.room.emit("youtube", {
            guid: this.guid,
            vid: "_HJ9LdmppYU"
        });
    },
    "unvaporwave": function() {
        this.socket.emit("unvaporwave");
    },
    "name": function() {
        let argsString = Utils.argsString(arguments);
        if (argsString.length > this.room.prefs.name_limit)
            return;
        if (argsString.includes("{COLOR}")) {
            argsString = this.public.color;
        }
        if (argsString.includes("{NAME}")) {
            return;
        }
        if (argsString.includes("{ROOM}")) {
            argsString = sanitizeHTML2(this.room.rid.slice(0,16));
        }
        if (argsString.includes("'")) {
            return;
        }
        if (argsString.includes("\"")) {
            return;
        }
		if (argsString.toLowerCase().includes("fune")) {return}
        if (argsString.toLowerCase().includes("bonzi.lol")) {return}
        if (argsString.toLowerCase().includes("bonzi.ga")) {return}
        if (argsString.toLowerCase().includes("bonziworld.lol")) {return}
        if (argsString.toLowerCase().includes("bonziworld.ga")) {return}
        if (argsString.toLowerCase().includes("http://")) {return}
        if (argsString.toLowerCase().includes("https://")) {return}
        if (argsString.toLowerCase().includes("discord.gg/")) {return}
        if (argsString.toLowerCase().includes("discord.com/")) {return}
        if (argsString.includes("@")) {return}
		
        let name = argsString || this.room.prefs.defaultName;
        this.public.name = this.private.sanitize ? sanitize(name) : name;
        this.room.updateUser(this);
    },
    "status": function() {
        let argsString = Utils.argsString(arguments);
        if (argsString.length > this.room.prefs.status_limit)
            return;
        if (argsString.includes("{COLOR}")) {
            argsString = this.public.color;
        }
        if (argsString.includes("{NAME}")) {
            argsString = sanitizeHTML2(this.public.name);
        }
        if (argsString.includes("{ROOM}")) {
            argsString = sanitizeHTML2(this.room.rid.slice(0,16));
        }
        if (argsString.includes("\"")) {
            return;
        }
        if (argsString.includes("'")) {
            return;
        }

        let status = argsString;
        this.public.status = this.private.sanitize ? sanitize(status) : status;
        this.room.updateUser(this);
    },
    broadcast: function (...text) {
        if (this.private.runlevel < 3) {
            this.socket.emit("alert", "This command requires administrator privileges");
            return;
        }
		if(text.join(' ') == "" || text.join(' ') == "undefined" || text.join(' ') == "null" || text.join(' ') == null) {
			return;
		} else {
			this.room.emit("broadcast", { msg: text.join(' '), sanitize: false, title: "Broadcast from " + this.public.name });
		}
    },
    limit: function (room_num) {
        if (this.private.runlevel < 3) {
            this.socket.emit("alert", "This command requires administrator privileges");
            return;
        }
        room_num = parseInt(room_num);

        if (isNaN(room_num)) {
            this.socket.emit("alert", "Ur drunk lel");
            return;
        }

        this.prefs.room_max = room_num;

        this.room.emit("alert", "The max limit of this room is now " + this.prefs.room_max);
    },
    "pitch": function(pitch) {
        pitch = parseInt(pitch);

        if (isNaN(pitch)) return;

        this.public.pitch = Math.max(
            Math.min(
                parseInt(pitch),
                this.room.prefs.pitch.max
            ),
            this.room.prefs.pitch.min
        );

        this.room.updateUser(this);
    },
    "sapi5pitch": function (pitch) {
      pitch = parseInt(pitch);

      if (isNaN(pitch)) return;

      this.public.sapi5pitch = parseInt(pitch);

      this.room.updateUser(this);
    },
    "tts": function (voice) {
      voice = parseInt(voice);

      this.public.voice = voice;

      this.room.updateUser(this);
    },
    "amplitude": function (amplitude) {
        amplitude = parseInt(amplitude);

        if (isNaN(amplitude)) return;

        if (this.private.runlevel != 3) {
            this.public.amplitude = Math.max(Math.min(parseInt(amplitude), this.room.prefs.amplitude.max), this.room.prefs.amplitude.min);
        } else {
            this.public.amplitude = amplitude;
        }

        this.room.updateUser(this);
    },
    "speed": function(speed) {
        speed = parseInt(speed);

        if (isNaN(speed)) return;

        this.public.speed = Math.max(
            Math.min(
                parseInt(speed),
                this.room.prefs.speed.max
            ),
            this.room.prefs.speed.min
        );
        
        this.room.updateUser(this);
    },
	"group": function (...text) {
		text = text.join(" ")
		if (text) {
			this.private.group = text + ""
			this.socket.emit("alert", "joined the group")
			return
		}
		this.socket.emit("alert", "enter a group id")
	},
	startyping: function () {
		this.room.emit("typing", { guid: this.guid })
	},
	stoptyping: function () {
		this.room.emit("stoptyping", { guid: this.guid })
	},
    "dm":function(...text){
        text = text.join(" ")
        text = sanitize(text,settingsSantize)
        if(!this.private.group){
            this.socket.emit("alert","join a group first")
            return
        }
        this.room.users.map(n=>{
            if(this.private.group === n.private.group){
                n.socket.emit("talk",{
                    guid:this.guid,
                    text:"<small><i>Only your group can see this.</i></small><br>"+text,
                    say:text
                })
            }
        })
    },
	"dm2": function (data) {
		if (typeof data != "object") return
		let pu = this.room.getUsersPublic()[data.target]
		if (pu && pu.color) {
			let target;
			this.room.users.map(n => {
				if (n.guid == data.target) {
					target = n;
				}
			})
			data.text = sanitize(data.text, settingsSantize)
			target.socket.emit("talk", {
				guid: this.guid,
				text: "<small>Only you can see this.</small><br>" + data.text,
				say: data.text
			})
			this.socket.emit("talk", {
				guid: this.guid,
				text: "<small>Only " + pu.name + " can see this.</small><br>" + data.text,
				say: data.text
			})
		} else {
			this.socket.emit('alert', { msg: 'The user you are trying to dm left. Get dunked on nerd', button: "oh fuck" })
		}
	}
};

class User {
    constructor(socket) {
        this.guid = Utils.guidGen();
        this.socket = socket;


        // Handle ban
	    if (Ban.isBanned(this.getIp())) {
            Ban.handleBan(this.socket);
        }
		
		//this.ratelimitlevel = 0;
        this.private = {
            login: false,
            sanitize: true,
            runlevel: 0
        };

        this.public = {
            color: settings.bonziColors[Math.floor(
                Math.random() * settings.bonziColors.length
            )],
			color_cross: 'none',
			voice: "default",
			hue: 0,
			saturation: 100
        };

        log.access.log('info', 'connect', {
            guid: this.guid,
            ip: this.getIp()
        });

        if (this.getIp() == "::1" || this.getIp() == "::ffff:127.0.0.1" || Ban.isIn(this.getIp())) {
            this.private.runlevel = 3;
            this.private.sanitize = false; 
		};
       this.socket.on('login', this.login.bind(this));
    }

    getIp() {
        return this.socket.handshake.headers["cf-connecting-ip"] || this.socket.request.connection.remoteAddress;
    }

    getPort() {
        return this.socket.handshake.address.port;
    }

    login(data) {
        if (typeof data != 'object') return; // Crash fix (issue #9)
        
        if (this.private.login) return;

		log.info.log('info', 'login', {
			guid: this.guid,
        });
        
        let rid = data.room;
        
		// Check if room was explicitly specified
		var roomSpecified = true;

		// If not, set room to public
        if (typeof rid == "undefined" || rid === "") {
			rid = roomsPublic[Math.max(roomsPublic.length - 1, 0)];
			roomSpecified = false;
        }

        
		log.info.log('debug', 'roomSpecified', {
			guid: this.guid,
			roomSpecified: roomSpecified
        });
        
		// If private room
		if (roomSpecified) {
            if (sanitize(rid) != rid) {
                this.socket.emit("loginFail", {
                    reason: "nameMal"
                });
                return;
            }

			// If room does not yet exist
			if (typeof rooms[rid] == "undefined") {
				if (rid == "2008") { 
				
					// Clone default settings
					var tmpPrefs = JSON.parse(JSON.stringify(settings.prefs.public));
					// Set owner
					tmpPrefs.owner = this.guid;
					roomsPublic.push(rid);
					// Create room
					newRoom(rid, tmpPrefs);
				
				} else {
				
					// Clone default settings
					var tmpPrefs = JSON.parse(JSON.stringify(settings.prefs.private));
					// Set owner
					tmpPrefs.owner = this.guid;
					newRoom(rid, tmpPrefs);
				
				}
			}
			// If room is full, fail login
			else if (rooms[rid].isFull()) {
				log.info.log('debug', 'loginFail', {
					guid: this.guid,
					reason: "full"
				});
				return this.socket.emit("loginFail", {
					reason: "full"
				});
			}
		// If public room
		} else {
			// If room does not exist or is full, create new room
			if ((typeof rooms[rid] == "undefined") || rooms[rid].isFull()) {
				rid = Utils.guidGen();
				roomsPublic.push(rid);
				// Create room
				newRoom(rid, settings.prefs.public);
			}
        }
        
        this.room = rooms[rid];

        // Check name
		
		this.public.name = sanitize(sanitizeHTML(data.name)) || this.room.prefs.defaultName;
		if(data.name.includes("'")){
			return this.socket.emit("loginFail", {
				reason: "nameLength"
			});
        }
        if(data.name.includes('"')){
			return this.socket.emit("loginFail", {
				reason: "nameLength"
			});
        }
        if(data.name.toLowerCase().includes("fune")) {
			return this.socket.emit("loginFail", {
				reason: "nameMal"
			});
        }
        if(data.name.toLowerCase().includes("bonzi.lol")) {
			return this.socket.emit("loginFail", {
				reason: "nameMal"
			});
        }
        if(data.name.toLowerCase().includes("bonzi.ga")) {
			return this.socket.emit("loginFail", {
				reason: "nameMal"
			});
        }
        if(data.name.toLowerCase().includes("bonziworld.lol")) {
			return this.socket.emit("loginFail", {
				reason: "nameMal"
			});
        }
        if(data.name.toLowerCase().includes("bonziworld.ga")) {
			return this.socket.emit("loginFail", {
				reason: "nameMal"
			});
        }
        if(data.name.toLowerCase().includes("http://")) {
			return this.socket.emit("loginFail", {
				reason: "nameMal"
			});
        }
        if(data.name.toLowerCase().includes("https://")) {
			return this.socket.emit("loginFail", {
				reason: "nameMal"
			});
        }
        if(data.name.toLowerCase().includes("discord.gg/")) {
			return this.socket.emit("loginFail", {
				reason: "nameMal"
			});
        }
        if(data.name.toLowerCase().includes("discord.com/")) {
			return this.socket.emit("loginFail", {
				reason: "nameMal"
			});
        }
        if(data.name.includes("@")) {
			return this.socket.emit("loginFail", {
				reason: "nameMal"
			});
        }
		
        if(this.public.name.includes("'")){
			return this.socket.emit("loginFail", {
				reason: "nameLength"
			});
        }
        if(this.public.name.includes('"')){
			return this.socket.emit("loginFail", {
				reason: "nameLength"
			});
        }

		if (this.public.name.length > this.room.prefs.name_limit)
			return this.socket.emit("loginFail", {
				reason: "nameLength"
			});
        
		if (this.room.prefs.speed.default == "random")
			this.public.speed = Utils.randomRangeInt(
				this.room.prefs.speed.min,
				this.room.prefs.speed.max
			);
		else this.public.speed = this.room.prefs.speed.default;

		if (this.room.prefs.pitch.default == "random")
			this.public.pitch = Utils.randomRangeInt(
				this.room.prefs.pitch.min,
				this.room.prefs.pitch.max
			);
		else this.public.pitch = this.room.prefs.pitch.default;

                if (this.room.prefs.sapi5pitch.default == "random")
                        this.public.sapi5pitch = Utils.randomRangeInt(
                                this.room.prefs.sapi5pitch.min,
                                this.room.prefs.sapi5pitch.max
                        );
                else this.public.sapi5pitch = this.room.prefs.sapi5pitch.default;
        let count = 0;
        for (const i in rooms) {
            const room = rooms[i];
            for (let u in room.users) {
                const user = room.users[u];
                if (user.getIp() == this.getIp()) {
                    count++;
                }
            }
        }

		// i will always find ways to fix things (originally)
        // all though it's mostly just server.erik.red code (thx bathbomb)
        if (count > 2 && (this.getIp() != "::1" && this.getIp() != "72.23.139.58")) {
            this.socket.emit("loginFail", {
                reason: "TooMany",
            });
            return;
        }
		
        // Join room
		this.room.join(this);

        this.private.login = true;
		//this.ratelimitlevel = 0;
        this.socket.removeAllListeners("login");

		// Send all user info
		this.socket.emit('updateAll', {
			usersPublic: this.room.getUsersPublic()
		});

		// Send room info
		this.socket.emit('room', {
			room: rid,
			vid: this.room.vid,
			curtime: this.room.curtime,
			isOwner: this.room.prefs.owner == this.guid || rid == "bonzi_tv",
			isPublic: roomsPublic.indexOf(rid) != -1
		});

        this.socket.on('talk', this.talk.bind(this));
		this.socket.on("updatebonzitv", this.updatebonzitv.bind(this));
		this.socket.on("setbonzitvtime", this.setbonzitvtime.bind(this));
        this.socket.on('command', this.command.bind(this));
        this.socket.on('disconnect', this.disconnect.bind(this));
        if (this.getIp() == "::1" || this.getIp() == "::ffff:127.0.0.1" || Ban.isIn(this.getIp())) {
            this.socket.emit("admin");
        }
    }
	
  setbonzitvtime(data) {
    this.room.curtime = data.curtime;
    /*
        log.info.log("info", "updateTime", {
          bonziTvTime: data.curtime,
        });
    */ 
  }
  async updatebonzitv() {
    if (!bonziTvCool) {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      var bonziTvIdent = videoIdsCommercials;
      var ident = Math.floor(Math.random() * bonziTvIdent.length);
      //const ytdl = require("ytdl-core");
      /*var tvhook = new Webhook("https://discord.com/api/webhooks/1022179106412036166/8cJeQN1dFC78Rar0pdjAEyYnsFFq--ZiWZt4WTT1--pnLikWRzwGjOHWYEYmtdmyjcRg");*/

      if (bonziTvCommercialMode) {

        var num = Math.floor(Math.random() * videoIdsCommercials.length);
        var vid = videoIdsCommercials[num].replace("https://www.youtube.com/watch?v=", "").replace("https://www.youtube.com/", "");
        this.room.vid = vid;

        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        this.room.emit("replaceTVWithURL", {
          id: videoIdsCommercials[Math.floor(Math.random() * videoIdsCommercials.length)].replace("https://www.youtube.com/watch?v=", "").replace("https://www.youtube.com/", ""),
          identId: videoIdsCommercials[num].replace("https://www.youtube.com/watch?v=", "").replace("https://www.youtube.com/", ""),
        });
      } else {
        if ((hours == 16 && minutes <= 30) || (hours == 9 && minutes <= 25) || (hours == 13 && minutes <= 20)) {
          var num = Math.floor(Math.random() * videoIds4PM2430PM.length);
          var vid = videoIds4PM2430PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://www.youtube.com/", "");
          this.room.vid = vid;
          //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
          /*await ytdl.getInfo("https://www.youtube.com/watch?v=" + vid).then((info) => {
            console.log("Playing video: " + info.videoDetails.title);
            if (info.videoDetails.title.match(/BFDI/g) || info.videoDetails.title.match(/BFDIA/g)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=0eGC9tMZ8co"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (
              info.videoDetails.title.match(/Microsoft Agent/gi) ||
              info.videoDetails.title.match(/MSAgent/gi) ||
              info.videoDetails.title.match(/PGG Rebooted/g) ||
              info.videoDetails.title.match(/Skits/g) ||
              info.videoDetails.title.match(/BonziBUDDY/g)
            ) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=13A2ycR6ruc"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (
              info.videoDetails.title.match(/Clips Tape/g) ||
              info.videoDetails.title.match(/Left 4 Dead/gi) ||
              info.videoDetails.title.match(/How it FEELS/g) ||
              info.videoDetails.title.match(/Gets Grounded/g) ||
              info.videoDetails.title.match(/Brian and Steve/g)
            ) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (info.videoDetails.title.match(/Youtube Poop/gi)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (info.videoDetails.title.match(/Vinesauce/gi)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=qlYR9mW1DVk"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            }
          });*/
          this.room.emit("replaceTVWithURL", {
            id: videoIds4PM2430PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://www.youtube.com/", ""),
            identId: bonziTvIdent[ident].replace("https://www.youtube.com/watch?v=", ""),
          });
        } else if (hours == 17) {
          var num = Math.floor(Math.random() * videoIds5PM.length);
          var vid = videoIds5PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://www.youtube.com/", "");
          this.room.vid = vid;
          /*await ytdl.getInfo("https://www.youtube.com/watch?v=" + vid).then((info) => {
            console.log("Playing video: " + info.videoDetails.title);
            if (info.videoDetails.title.match(/BFDI/g) || info.videoDetails.title.match(/BFDIA/g)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=0eGC9tMZ8co"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (
              info.videoDetails.title.match(/Microsoft Agent/gi) ||
              info.videoDetails.title.match(/MSAgent/gi) ||
              info.videoDetails.title.match(/PGG Rebooted/g) ||
              info.videoDetails.title.match(/Skits/g) ||
              info.videoDetails.title.match(/BonziBUDDY/g)
            ) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=13A2ycR6ruc"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (
              info.videoDetails.title.match(/Clips Tape/g) ||
              info.videoDetails.title.match(/Left 4 Dead/gi) ||
              info.videoDetails.title.match(/How it FEELS/g) ||
              info.videoDetails.title.match(/Gets Grounded/g) ||
              info.videoDetails.title.match(/Brian and Steve/g)
            ) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (info.videoDetails.title.match(/Youtube Poop/gi)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (info.videoDetails.title.match(/Vinesauce/gi)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=qlYR9mW1DVk"];
              ident = Math.floor(Math.random() * bonziTvIdent.length); 
            }
          });*/
          //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
          this.room.emit("replaceTVWithURL", {
            id: videoIds5PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://www.youtube.com/", ""),
            identId: bonziTvIdent[ident].replace("https://www.youtube.com/watch?v=", ""),
          });
        } else if (hours == 18 && minutes <= 20) {
          var num = Math.floor(Math.random() * videoIds6PM.length);
          var vid = videoIds6PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://www.youtube.com/", "");
          this.room.vid = vid;
          /*await ytdl.getInfo("https://www.youtube.com/watch?v=" + vid).then((info) => {
            console.log("Playing video: " + info.videoDetails.title);
            if (info.videoDetails.title.match(/BFDI/g) || info.videoDetails.title.match(/BFDIA/g)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=0eGC9tMZ8co"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (
              info.videoDetails.title.match(/Microsoft Agent/gi) ||
              info.videoDetails.title.match(/MSAgent/gi) ||
              info.videoDetails.title.match(/PGG Rebooted/g) ||
              info.videoDetails.title.match(/Skits/g) ||
              info.videoDetails.title.match(/BonziBUDDY/g)
            ) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=13A2ycR6ruc"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (
              info.videoDetails.title.match(/Clips Tape/g) ||
              info.videoDetails.title.match(/Left 4 Dead/gi) ||
              info.videoDetails.title.match(/How it FEELS/g) ||
              info.videoDetails.title.match(/Gets Grounded/g) ||
              info.videoDetails.title.match(/Brian and Steve/g)
            ) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (info.videoDetails.title.match(/Youtube Poop/gi)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (info.videoDetails.title.match(/Vinesauce/gi)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=qlYR9mW1DVk"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            }
          });*/
          //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
          this.room.emit("replaceTVWithURL", {
            id: videoIds6PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://www.youtube.com/", ""),
            identId: bonziTvIdent[ident].replace("https://www.youtube.com/watch?v=", ""),
          });
        } else if (hours == 19 && minutes <= 22) {
          var num = Math.floor(Math.random() * videoIds6PM.length);
          var vid = videoIds6PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://www.youtube.com/", "");
          this.room.vid = vid;
          /*await ytdl.getInfo("https://www.youtube.com/watch?v=" + vid).then((info) => {
            console.log("Playing video: " + info.videoDetails.title);
            if (info.videoDetails.title.match(/BFDI/g) || info.videoDetails.title.match(/BFDIA/g)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=0eGC9tMZ8co"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (
              info.videoDetails.title.match(/Microsoft Agent/gi) ||
              info.videoDetails.title.match(/MSAgent/gi) ||
              info.videoDetails.title.match(/PGG Rebooted/g) ||
              info.videoDetails.title.match(/Skits/g) ||
              info.videoDetails.title.match(/BonziBUDDY/g)
            ) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=13A2ycR6ruc"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (
              info.videoDetails.title.match(/Clips Tape/g) ||
              info.videoDetails.title.match(/Left 4 Dead/gi) ||
              info.videoDetails.title.match(/How it FEELS/g) ||
              info.videoDetails.title.match(/Gets Grounded/g) ||
              info.videoDetails.title.match(/Brian and Steve/g)
            ) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (info.videoDetails.title.match(/Youtube Poop/gi)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (info.videoDetails.title.match(/Vinesauce/gi)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=qlYR9mW1DVk"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            }
          });*/
          //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
          this.room.emit("replaceTVWithURL", {
            id: videoIds6PM[num].replace("https://www.youtube.com/watch?v=", "").replace("https://www.youtube.com/", ""),
            identId: bonziTvIdent[ident].replace("https://www.youtube.com/watch?v=", ""),
          });
        } else {
          var num = Math.floor(Math.random() * videoIds25MinutesofMSAgent.length);
          var vid = videoIds25MinutesofMSAgent[num].replace("https://www.youtube.com/watch?v=", "").replace("https://www.youtube.com/", "");
          this.room.vid = vid;
          /*await ytdl.getInfo("https://www.youtube.com/watch?v=" + vid).then((info) => {
            console.log("Playing video: " + info.videoDetails.title);
            if (info.videoDetails.title.match(/BFDI/g) || info.videoDetails.title.match(/BFDIA/g)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=0eGC9tMZ8co"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (
              info.videoDetails.title.match(/Microsoft Agent/gi) ||
              info.videoDetails.title.match(/MSAgent/gi) ||
              info.videoDetails.title.match(/PGG Rebooted/g) ||
              info.videoDetails.title.match(/Skits/g) ||
              info.videoDetails.title.match(/BonziBUDDY/g)
            ) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=13A2ycR6ruc"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (
              info.videoDetails.title.match(/Clips Tape/g) ||
              info.videoDetails.title.match(/Left 4 Dead/gi) ||
              info.videoDetails.title.match(/How it FEELS/g) ||
              info.videoDetails.title.match(/Gets Grounded/g) ||
              info.videoDetails.title.match(/Brian and Steve/g)
            ) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (info.videoDetails.title.match(/Youtube Poop/gi)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (info.videoDetails.title.match(/Vinesauce/gi)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=qlYR9mW1DVk"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            }
          });*/
          //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
          this.room.emit("replaceTVWithURL", {
            id: videoIds25MinutesofMSAgent[num].replace("https://www.youtube.com/watch?v=", "").replace("https://www.youtube.com/", ""),
            identId: bonziTvIdent[ident].replace("https://www.youtube.com/watch?v=", ""),
          });
        }
      }
      bonziTvCool = true;
      setTimeout(function() {
        bonziTvCool = false;
      }, 20000);
    }
  }
  
    talk(data) {
        if (typeof data != 'object') { // Crash fix (issue #9)
            data = {
                text: "HEY EVERYONE LOOK AT ME I AM TRYING TO SCREW WITH THE SERVER LMAO"
            };
        }
        /*if (this.ratelimitlevel >= 100) {
            this.socket.emit("ratelimit");        
            Ban.mute(this.getIp(), 356, "You are currently rate limited. Please try again later.");
            this.ratelimitlevel = 0; 
        } else {
            this.ratelimitlevel = this.ratelimitlevel + 15;
            setTimeout(function(){
                this.ratelimitlevel = this.ratelimitlevel - 15;
            },1000)
        }*/
        
        var msg_txt = data.text;
        //if (msg_txt.includes("[[") && msg_txt.replace(/[^l]/g, "").length >= 75) data.text = "Suspicious amount of l's found."
        //if (msg_txt.includes("[[") && msg_txt.replace(/[^;]/g, "").length >= 75) data.text = "Suspicious amount of semicolon's found."
    
         log.info.log('info', 'talk', {
            guid: this.guid,
            name: data.name,
            color: this.public.color || "N/A",
            ip: this.getIp() || "N/A",
            text: data.text
        }); 
      
        if (typeof data.text == "undefined")
            return;

        let text = this.private.sanitize ? sanitize(sanitizeHTML(data.text)) : sanitizeHTML(data.text);
		if ((text.length <= this.room.prefs.char_limit) && (text.length > 0)) {
            this.room.emit('talk', {
                guid: this.guid,
                name: this.name,
                text: sanitizeHTML(text)
			});
			return;
		  //}
		}
        if ((text.length <= this.room.prefs.char_limit) && (text.length > 0)) {
            this.room.emit('talk', {
                guid: this.guid,
                name: this.name,
                text: sanitizeHTML(text),
				say: sanitize(text, { allowedTags: [] }),
            });
        }
        if (text.length < 1000 && text.length > 1) {
            try {
                var rid = this.room.rid.slice(0,16)
                    .replaceAll("@", "%")
                    .replaceAll("`", "\u200B")
                    .replaceAll(" ", "\u200B ")
                    .replaceAll("http://", "hgrunt/ass.wav")
                    .replaceAll("https://", "hgrunt/ass.wav")
                    .replaceAll("discord.gg/", "hgrunt/ass.wav")
                    .replaceAll("discord.com/", "hgrunt/ass.wav")
                    .replaceAll("bonzi.lol", "bwe")
                    .replaceAll("bonzi.ga", "bwe")
                    .replaceAll("*", " ")
                    .replaceAll("|", " ")
                    .replaceAll("~", " ")
                var txt = text
                    .replaceAll("@", "%")
                    .replaceAll("`", "\u200B")
                    .replaceAll(" ", "\u200B ")
                    .replaceAll("http://", "hgrunt/ass.wav")
                    .replaceAll("https://", "hgrunt/ass.wav")
                    .replaceAll("discord.gg/", "hgrunt/ass.wav")
                    .replaceAll("discord.com/", "hgrunt/ass.wav")
                    .replaceAll("bonzi.lol", "bwe")
                    .replaceAll("bonzi.ga", "bwe")
                    .replaceAll("*", " ")
                    .replaceAll("|", " ")
                    .replaceAll("~", " ")
                    .replaceAll("{NAME}", this.public.name)
                    .replaceAll("{ROOM}", this.room.rid)
                    .replaceAll("{COLOR}", this.public.color)
                const IMAGE_URL = "https://raw.githubusercontent.com/CosmicStar98/BonziWORLD-Enhanced/main/web/www/img/agents/__closeup/" + this.public.color + ".png";
                hook.setUsername(this.public.name + " | " + "Room ID: " + rid);
                hook.setAvatar(IMAGE_URL);
                if (this.private.runlevel < 3) {
                    txt = txt.replaceAll("<", "!").replaceAll(">", "$");
                }
				if (hook != " ") {
					//hook.send(txt);
				}
            } catch (err) {
                console.log("WTF?: " + err.stack);
            }
        }
    }
	
    command(data) {
        if (typeof data != 'object') return; // Crash fix (issue #9)
        let name = sanitizeHTML(this.public.name);
        var command;
        var args;
        /*if (this.ratelimitlevel >= 100) {
            this.socket.emit("ratelimit");
            Ban.mute(this.getIp(), 8, "You are currently rate limited. Please try again later.");
            this.ratelimitlevel = 0;
        } else {
            this.ratelimitlevel = this.ratelimitlevel + 15;
            setTimeout(function(){ 
                this.ratelimitlevel = this.ratelimitlevel - 15;
            },1000)
        }*/
        try {
            var list = data.list;
            command = list[0].toLowerCase();
            args = list.slice(1);
    
            log.info.log('debug', command, {
                guid: this.guid,
                args: args
            });

            if (this.private.runlevel >= (this.room.prefs.runlevel[command] || 0)) {
                let commandFunc = userCommands[command];
                if (commandFunc == "passthrough")
                    this.room.emit(command, {
                        "guid": this.guid
                    });
                else commandFunc.apply(this, args);
            } else
                this.socket.emit('commandFail', {
                    reason: "runlevel"
                });
        } catch(e) {
            log.info.log('debug', 'commandFail', {
                guid: this.guid,
                command: command,
                args: args,
                reason: "notexist",
                exception: e
            });
            this.socket.emit('commandFail', {
                reason: "notexist"
            });
        }
    }

    disconnect() {
		let ip = "N/A";
		let port = "N/A";

		try {
			ip = this.getIp();
			port = this.getPort();
		} catch(e) { 
			log.info.log('warn', "exception", {
				guid: this.guid,
				exception: e
			});
		}

		log.access.log('info', 'disconnect', {
			guid: this.guid,
			ip: ip,
			port: port
		});
         
        this.socket.broadcast.emit('leave', {
            guid: this.guid
        });
        
        this.socket.removeAllListeners('talk');
        this.socket.removeAllListeners('command');
        this.socket.removeAllListeners('disconnect');

        this.room.leave(this);
    }
}

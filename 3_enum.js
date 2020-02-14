// enum
var Membership;
(function (Membership) {
    Membership[Membership["Simple"] = 0] = "Simple";
    Membership[Membership["Standart"] = 1] = "Standart";
    Membership[Membership["Premium"] = 2] = "Premium";
})(Membership || (Membership = {}));
var membership = Membership.Premium;
var membershipRevers = Membership[1];
console.log(membership); // 2
console.log(membershipRevers); // Standart
var SosialMedia;
(function (SosialMedia) {
    SosialMedia["VK"] = "VK";
    SosialMedia["FACEBOOK"] = "FACEBOOK";
    SosialMedia["INSTAGRAM"] = "INSTAGRAM";
})(SosialMedia || (SosialMedia = {}));
var sosial = SosialMedia.FACEBOOK;
console.log(sosial); // FACEBOOK

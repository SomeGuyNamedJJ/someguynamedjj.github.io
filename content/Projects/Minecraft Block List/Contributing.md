---
cssclass: blocklist
date: 2026-07-06
comments: false
---
<div class="pill-container">
    <div class="mc-button"><a href="/Projects/Minecraft-Block-List">Back</a></div>
</div>

If you want to contribute, you can add additional versions by setting the value in `src/data/versions.csv` from that version from `FALSE` to `TRUE`.

Then, edit `src/data/blocks.csv` and add data in the following format: <br />
`Block Name,block_id,Version Index`

Where `Block Name` is the name of the block, `block_id` is the block name in snake_case and `Version Index` is the line of `src/data/versions.csv` that corresponds to the first version the block appeared in. After adding anything to this file, it must be sorted alphabetically by the `Block Name`.

Finally, please upload a render taken from [Java Edition version history - Minecraft Wiki](https://minecraft.wiki/w/Java_Edition_version_history). Ensure that block renders are 32x32 in .png format, and item renders are 16x16 in .png format. They should be placed as `src/assets/blocks/block_id.png`.

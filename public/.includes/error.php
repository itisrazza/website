<?php $page = array(
    'title' => $error['title']
); ?>

<?php include '../.includes/page-header.php'; ?>

<div style="text-align: center; padding: 3.5em 0;">
    <div style="font-size: 5em;" class="emoji"><?php echo $error['emoji']; ?></div>
    <h1><?php echo $error['subtitle']; ?></h1>
    <p><?php echo $error['description']; ?></p>
    <p>Try going back <a href="/">home</a> and retrace your steps.</p>
</div>

<?php include '../.includes/page-footer.php'; ?>

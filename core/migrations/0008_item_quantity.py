# Generated by Django 4.2.3 on 2023-08-22 14:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("core", "0007_remove_item_preview4_remove_item_preview_video_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="item",
            name="quantity",
            field=models.FloatField(blank=True, null=True),
        ),
    ]

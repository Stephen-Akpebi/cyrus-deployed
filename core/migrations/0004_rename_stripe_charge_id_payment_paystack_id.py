# Generated by Django 4.1.2 on 2023-04-20 14:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("core", "0003_alter_address_address_type_alter_address_country_and_more"),
    ]

    operations = [
        migrations.RenameField(
            model_name="payment",
            old_name="stripe_charge_id",
            new_name="paystack_id",
        ),
    ]

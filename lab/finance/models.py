from django.db import models

from django.db import models

class Transaction(models.Model):
    TYPE_CHOICES = (
        ('debit', 'Дебет'),
        ('credit', 'Кредит'),
    )

    description = models.CharField(max_length=255, verbose_name="Опис")
    amount = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Сума")
    transaction_type = models.CharField(max_length=10, choices=TYPE_CHOICES, verbose_name="Тип")

    def __str__(self):
        return f"{self.description} | {self.amount} ({self.get_transaction_type_display()})"